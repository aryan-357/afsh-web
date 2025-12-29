import React from 'react';

const BrandFooter: React.FC = () => {
  return (
    <div className="relative z-20 bg-gray-900 text-white flex flex-col justify-center items-center py-20 border-t border-gray-800 w-full overflow-hidden select-none">
      <div className="relative group cursor-default">
        <h1 className="text-[25vw] leading-[0.8] font-display font-bold text-gray-800 tracking-tighter opacity-50 group-hover:opacity-80 transition-opacity duration-700">
          AFSH
        </h1>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-2xl md:text-3xl font-serif tracking-widest uppercase text-yellow-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Air Force School Hindan
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandFooter;