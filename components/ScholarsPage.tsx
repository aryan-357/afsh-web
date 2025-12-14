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

                <div className="inline-block w-full max-w-5xl mx-auto bg-white dark:bg-gray-700 p-2 md:p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-600">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 font-serif uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-600 pb-4 inline-block px-8">
                        Class 10th 2024-25
                    </h2>
                    
                    {/* 
                       Note: In a real application, you would replace this URL with the actual URL of the uploaded image.
                       Since we are in a code generation environment, we are using a high-quality placeholder 
                       that represents a group of students.
                    */}
                    <div className="relative overflow-hidden rounded-lg mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                            alt="Class 10th 2024-25 Group Photo"
                            className="w-full h-auto object-cover rounded shadow-sm hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg pointer-events-none"></div>
                    </div>
                    
                    <p className="text-gray-500 dark:text-gray-400 mt-6 italic font-serif text-lg">
                        "Celebrating the academic excellence and spirit of our Class 10 scholars."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarsPage;