import React from 'react';

const EDMessage: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    <div className="w-full md:w-1/3 relative">
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                            <img
                                src="https://picsum.photos/seed/ed-director/400/500"
                                alt="Executive Director"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute top-4 -right-4 w-full h-full bg-af-gold/10 dark:bg-af-gold/20 rounded-lg -z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-af-blue/20 dark:bg-af-blue/10 rounded-full -z-0"></div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h4 className="text-af-gold dark:text-af-gold font-bold uppercase tracking-wider text-sm mb-2">From the ED's Desk</h4>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                            Leading with <span className="text-af-gold">Vision & Purpose</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                            <p>
                                "It is my honor to address you as the Executive Director of Air Force School Hindan. Our institution has consistently upheld the highest standards of academic excellence while nurturing the values that define the Indian Air Force ethos."
                            </p>
                            <p>
                                Under the aegis of the Air Force, we are committed to developing well-rounded individuals who can meet the challenges of the 21st century. Our focus extends beyond academics to encompass character building, physical fitness, and social responsibility.
                            </p>
                            <p>
                                Together with our dedicated team of educators and supportive community, we continue to strive for excellence in every endeavor. I invite all stakeholders to join us in this noble mission of shaping the leaders of tomorrow.
                            </p>
                        </div>
                        <div className="mt-8">
                            <p className="font-bold text-lg text-af-blue dark:text-af-light font-serif">Mrs. ED Name</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Executive Director, Air Force School Hindan</p>
                            <img src="https://picsum.photos/seed/ed-signature/200/50" alt="Signature" className="mt-2 opacity-60 dark:opacity-80 dark:invert h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EDMessage;
