import React from 'react';

const PrincipalMessage: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
              <img
                src="https://picsum.photos/seed/principal/400/500"
                alt="Principal"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-4 -left-4 w-full h-full bg-af-blue/10 dark:bg-af-blue/20 rounded-lg -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-af-gold/20 dark:bg-af-gold/10 rounded-full -z-0"></div>
          </div>

          <div className="w-full md:w-2/3">
            <h4 className="text-af-blue dark:text-af-light font-bold uppercase tracking-wider text-sm mb-2">From the Principal's Desk</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Empowering Minds, <span className="text-af-blue dark:text-blue-400">Shaping Futures</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                "It gives me immense pleasure to welcome you to Air Force School Hindan. Our school stands as a beacon of learning, discipline, and holistic development. We believe that education is not just about filling a bucket, but lighting a fire."
              </p>
              <p>
                In the rapidly changing global scenario, we are committed to providing an environment that fosters critical thinking, creativity, and ethical values. Being an Air Force School, we take pride in instilling a sense of patriotism, resilience, and discipline in our students.
              </p>
              <p>
                Our dedicated faculty, state-of-the-art infrastructure, and supportive parent community work in unison to ensure that every child reaches their full potential. We invite you to be a part of this exciting journey of learning and growth.
              </p>
            </div>
            <div className="mt-8">
              <p className="font-bold text-lg text-af-blue dark:text-af-light font-serif">Mrs. Savita Jaitly</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Principal, Air Force School Hindan</p>
              <img src="https://picsum.photos/seed/signature/200/50" alt="Signature" className="mt-2 opacity-60 dark:opacity-80 dark:invert h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
