import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Target, Star, Trophy } from 'lucide-react';
import Silk from '../../components/ui/Silk';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.3, ease: "easeOut" as const }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.3, ease: "easeOut" as const }
};

const alumniTestimonials = [
  {
    name: "Lt. Col. Vikram Rathore",
    batch: "1998",
    achievement: "Indian Army",
    message: "Air Force School Hindan instilled in me the discipline and values that have guided my career in the armed forces. I am forever grateful to my teachers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Dr. Ananya Sharma",
    batch: "2005",
    achievement: "Neurosurgeon",
    message: "The strong foundation in sciences I received here paved the way for my medical career. The school truly nurtures talent.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Rahul Mehra",
    batch: "2012",
    achievement: "Software Architect at Google",
    message: "From the computer lab sessions to the cultural fests, every moment spent at AFS Hindan contributed to who I am today.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  }
];

const AlumniPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.5}
            color="#1a365d"
            noiseIntensity={1.2}
            rotation={0}
            fullScreen={false}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-28">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg"
          >
            Our <span className="text-af-gold">Alumni Network</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow"
          >
            Connecting generations of students who have walked the halls of Air Force School Hindan.
          </motion.p>
          <div className="w-24 h-1 bg-af-gold mx-auto mt-6 animate-fade-in-up delay-100"></div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Alumni', value: '5000+', icon: <Users className="w-6 h-6" /> },
              { label: 'Global Presence', value: '25+ Countries', icon: <Target className="w-6 h-6" /> },
              { label: 'Success Stories', value: '500+', icon: <Trophy className="w-6 h-6" /> },
              { label: 'Years of Legacy', icon: <Star className="w-6 h-6" />, value: '40+' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                {...scaleIn}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-af-blue/5 hover:to-af-light/5 border border-transparent hover:border-af-blue/20"
              >
                <motion.div 
                  className="inline-flex p-3 rounded-full bg-af-blue/10 text-af-blue dark:text-af-light mb-4"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.p 
                  className="text-3xl font-bold text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-20"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 dark:text-white mb-16"
            {...scaleIn}
            transition={{ delay: 0.5 }}
          >
            Distinguished Alumni
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniTestimonials.map((alumnus, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                transition={{ 
                  delay: 0.6 + (idx * 0.15),
                  duration: 0.8,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-br hover:from-af-blue/5 hover:to-af-light/5 group"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  transition={{ delay: 0.8 + (idx * 0.15) }}
                  whileHover={{ 
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.4 }
                  }}
                >
                  <img 
                    src={alumnus.image} 
                    alt={alumnus.name}
                    className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-af-blue/20 group-hover:border-af-blue/40 transition-colors duration-300"
                  />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  transition={{ delay: 0.9 + (idx * 0.15) }}
                >
                  {alumnus.name}
                </motion.h3>
                <motion.p 
                  className="text-af-blue dark:text-af-light font-bold text-sm mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  transition={{ delay: 1.0 + (idx * 0.15) }}
                >
                  Batch of {alumnus.batch}
                </motion.p>
                <motion.p 
                  className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  transition={{ delay: 1.1 + (idx * 0.15) }}
                >
                  {alumnus.achievement}
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 italic text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  transition={{ delay: 1.2 + (idx * 0.15) }}
                >
                  "{alumnus.message}"
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Registration CTA */}
      <motion.section 
        className="py-20 bg-gray-900 text-white text-center relative overflow-hidden"
        {...scaleIn}
        transition={{ delay: 0.8 }}
      >
        {/* Background decoration */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-af-blue/10 blur-[120px] rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-6 text-af-light" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            {...slideInFromLeft}
            transition={{ delay: 1.0 }}
          >
            Are you an Alumnus?
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-xl mx-auto mb-10"
            {...slideInFromRight}
            transition={{ delay: 1.1 }}
          >
            Join our official directory and stay connected with your alma mater, fellow batchmates, and mentor current students.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ delay: 1.2, duration: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <Link 
              to="/alumni/register"
              className="relative inline-block overflow-hidden bg-af-blue hover:bg-af-light text-white px-10 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest hover:shadow-xl hover:shadow-af-blue/25 group"
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-af-light to-af-blue rounded-full"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AlumniPage;
