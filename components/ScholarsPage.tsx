import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ScholarsPageProps {
  onBack: () => void;
}

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

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-t-4 border-af-gold animate-fade-in-up">
            <div className="p-8 md:p-12 text-center">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-af-blue dark:text-white mb-2">Scholars</h1>
                <div className="w-24 h-1.5 bg-af-gold mx-auto mb-10 rounded-full"></div>

                {/* Class 10th Section */}
                <div className="w-full max-w-7xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 font-serif uppercase tracking-wider border-b-2 border-af-gold pb-2 inline-block">
                        Class 10th 2024-25
                    </h2>
                    
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-xl shadow-md border border-gray-100 dark:border-gray-600">
                        {/* 
                           PLACEHOLDER IMAGE 
                           Please replace the src below with the URL of the image you uploaded 
                           (e.g., ./assets/class10.jpg or the hosted URL).
                        */}
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                             <img
                                src=":afsh website pic 1.jpg"
                                alt="Class 10th Students with Medals and Certificates"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-4 font-serif italic">
                            "Congratulations to our meritorious students of Class X (Session 2024-25)"
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarsPage;