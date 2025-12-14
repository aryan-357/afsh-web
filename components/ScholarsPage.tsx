import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ScholarsPageProps {
  onBack: () => void;
}

// ==================================================================================
// INSTRUCTIONS TO ADD YOUR PHOTO:
// 1. If you can't add a local file, upload your photo to https://postimages.org/
// 2. Copy the 'Direct Link' (it usually ends in .jpg or .png).
// 3. Paste the link inside the quotes below, replacing the placeholder URL.
// ==================================================================================
const YOUR_PHOTO_URL = "https://i.postimg.cc/YqLjTp3z/scholars-photo-jpg.webp"; 
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
                    
                    {/* Photo Frame */}
                    <div className="bg-white dark:bg-gray-700 p-2 md:p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 transform hover:scale-[1.01] transition-transform duration-500">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                             <img
                                src={YOUR_PHOTO_URL}
                                alt="Class 10th Scholars Group Photo"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback if the link is broken
                                  e.currentTarget.src = "https://placehold.co/1200x675/00308F/FFFFFF/png?text=Photo+Unavailable+Check+URL";
                                }}
                            />
                            {/* Overlay Gradient for "Stage" effect feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                        
                        <div className="mt-6 text-center">
                            <p className="text-lg md:text-xl text-gray-800 dark:text-white font-serif font-bold">
                                "Celebrating Excellence"
                            </p>
                            <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2 italic max-w-3xl mx-auto">
                                The school administration, principal, and staff congratulate our brilliant students of Class X for their outstanding performance in the board examinations.
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