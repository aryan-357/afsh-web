import React from 'react';

const PrincipalMessage: React.FC = () => {
  return (
    <section className="py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="bg-white/15 dark:bg-black/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30">
                <img
                  src="https://picsum.photos/seed/principal/400/500"
                  alt="Principal"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute top-4 -left-4 w-full h-full bg-af-blue/20 rounded-2xl -z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-af-gold/30 rounded-full -z-0"></div>
            </div>

            <div className="w-full md:w-2/3">
              <h4 className="text-af-gold font-bold uppercase tracking-wider text-sm mb-2">From the Principal's Desk</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Empowering Minds, <span className="text-af-gold">Shaping Futures</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed text-justify">
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
                <p className="font-bold text-lg text-white font-serif">Mrs. Savita Jaitly</p>
                <p className="text-sm text-white/60">Principal, Air Force School Hindan</p>
                <img src="https://picsum.photos/seed/signature/200/50" alt="Signature" className="mt-2 opacity-60 invert h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
