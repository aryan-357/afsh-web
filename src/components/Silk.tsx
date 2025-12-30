import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveMesh = () => {
    const mesh = useRef<THREE.Mesh>(null);
    const geometry = useRef<THREE.PlaneGeometry>(null);

    // Generate noise/wave height
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#4C8BF5') }, // Light blueish
    }), []);

    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
            // mesh.current.rotation.x = -Math.PI / 2; // Flat on ground if needed, but for background facing camera is usually better or slightly tilted
            uniforms.uTime.value = clock.getElapsedTime();
        }
    });

    const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      
      float elevation = sin(modelPosition.x * 2.0 - uTime * 0.5) * 0.2
                      + sin(modelPosition.y * 2.0 - uTime * 0.3) * 0.2;
                      
      modelPosition.z += elevation;
      
      vElevation = elevation;

      gl_Position = projectionMatrix * viewMatrix * modelPosition;
    }
  `;

    const fragmentShader = `
    uniform vec3 uColor;
    varying float vElevation;

    void main() {
      float alpha = (vElevation + 0.4) * 0.8;
      gl_FragColor = vec4(uColor, alpha);
    }
  `;

    return (
        <mesh ref={mesh} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <planeGeometry ref={geometry} args={[10, 10, 64, 64]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                side={THREE.DoubleSide}
                wireframe={false} // Switch to true for "mesh" look if described as mesh
            />
        </mesh>
    );
};

// Based on "Silk" description which often implies smooth, flowing, maybe points or lines.
// Let's implement a nicer looking "Flowing Mesh" that matches "ReactBits Silk" usually.
// Often it's lines. But the subagent said "animated wave/mesh".
// Let's try a Point/Line based one or a glossy shader. 
// Actually, simple wave is safest. Let's stick to a clean interactive or auto-flowing one.

const Silk = () => {
    return (
        <div className="fixed inset-0 z-0 h-screen w-full bg-gradient-to-b from-gray-900 to-black pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <WaveMesh />
            </Canvas>
        </div>
    );
};

export default Silk;
