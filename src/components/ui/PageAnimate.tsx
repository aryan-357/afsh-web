import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';

interface PageAnimateProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * A wrapper component that provides a standardized, formal page entrance transition using React Spring.
 * Configured for a slow, premium feel.
 */
const PageAnimate: React.FC<PageAnimateProps> = ({ children, className = "" }) => {
    const props = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { mass: 3, tension: 200, friction: 50 }, // Slow, weighty feel
    });

    return (
        <animated.div style={props} className={className}>
            {children}
        </animated.div>
    );
};

export default PageAnimate;
