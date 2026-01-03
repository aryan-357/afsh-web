import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Target, Star, Trophy } from 'lucide-react';
import Silk from '../components/ui/Silk';

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
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow"
          >
            Connecting generations of students who have walked the halls of Air Force School Hindan.
          </motion.p>
          <div className="w-24 h-1 bg-af-gold mx-auto mt-6 animate-fade-in-up delay-200"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Alumni', value: '5000+', icon: <Users className="w-6 h-6" /> },
              { label: 'Global Presence', value: '25+ Countries', icon: <Target className="w-6 h-6" /> },
              { label: 'Success Stories', value: '500+', icon: <Trophy className="w-6 h-6" /> },
              { label: 'Years of Legacy', icon: <Star className="w-6 h-6" />, value: '40+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 transition-colors">
                <div className="inline-flex p-3 rounded-full bg-af-blue/10 text-af-blue dark:text-af-light mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 dark:text-white mb-16">Distinguished Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniTestimonials.map((alumnus, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-colors duration-300"
              >
                <img 
                  src={alumnus.image} 
                  alt={alumnus.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-af-blue/20"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{alumnus.name}</h3>
                <p className="text-af-blue dark:text-af-light font-bold text-sm mb-2">Batch of {alumnus.batch}</p>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">{alumnus.achievement}</p>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm leading-relaxed">"{alumnus.message}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-af-light" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Are you an Alumnus?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">Join our official directory and stay connected with your alma mater, fellow batchmates, and mentor current students.</p>
          <Link 
            to="/alumni/register"
            className="inline-block bg-af-blue hover:bg-af-light text-white px-10 py-4 rounded-full font-bold transition duration-300 uppercase tracking-widest"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;
