import React from 'react';
import { ArrowLeft, Info } from 'lucide-react';

interface ScholarsPageProps {
  onBack: () => void;
}

// ==================================================================================
// PHOTO CONFIGURATION
// ==================================================================================
// TIP: If your original image is small or blurry, this new layout will help it look better 
// by adding a blurred background effect. 
// For best results, use an AI Upscaler (like upscale.media) on your photo before uploading.
// ==================================================================================
const YOUR_PHOTO_URL = "https://i.postimg.cc/WbDtxMjL/upscalemedia-transformed.webp"; 
// ==================================================================================


const ScholarsPage: React.FC<ScholarsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <button
            onClick={onBack}
            className="flex items-center gap-2 text-af-blue dark:text-af-light hover:underline mb-8 font-medium group"
        >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border-t-4 border-af-gold animate-fade-in-up">
            <div className="p-6 md:p-12 text-center">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-af-blue dark:text-white mb-3">Academic Achievers</h1>
                <div className="w-24 h-1.5 bg-af-gold mx-auto mb-10 rounded-full"></div>

                {/* Class 10th Section */}
                <div className="w-full max-w-6xl mx-auto mb-16">
                    <div className="flex flex-col items-center">
                        <span className="text-af-blue dark:text-af-light font-bold tracking-widest uppercase text-xs mb-2">Session 2024-25</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 font-serif">
                            Class X Toppers & Scholars
                        </h2>
                    </div>
                    
                    {/* 
                        Enhanced Photo Frame 
                        Uses a blurred backdrop to make low-quality or different aspect ratio images look professional.
                    */}
                    <div className="bg-white dark:bg-gray-700 p-2 md:p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600">
                        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden group">
                            
                            {/* 1. Blurred Background Layer (Ambience) */}
                            {/* This fills the container with a blurred version of the image, hiding pixelation */}
                            <div 
                                className="absolute inset-0 opacity-50 blur-[20px] scale-110"
                                style={{ 
                                    backgroundImage: `url('${YOUR_PHOTO_URL}')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            />
                            
                            {/* 2. Dark Overlay to ensure focus is on the main image */}
                            <div className="absolute inset-0 bg-black/10" />

                            {/* 3. The Main Image - Centered and 'contain' to prevent pixelated stretching */}
                            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                                <img
                                    src={YOUR_PHOTO_URL}
                                    alt="Class 10th Scholars"
                                    className="w-full h-full object-contain rounded shadow-2xl relative z-10 transition-transform duration-500 hover:scale-[1.02]"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/1200x675/00308F/FFFFFF/png?text=Image+Load+Error";
                                    }}
                                />
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-lg md:text-xl text-gray-800 dark:text-white font-serif font-bold">
                                "Celebrating Excellence"
                            </p>
                            <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2 italic max-w-3xl mx-auto flex items-center justify-center gap-2">
                                <Info size={14} className="text-af-blue dark:text-af-light" />
                                The school administration congratulates our brilliant students.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarsPage;