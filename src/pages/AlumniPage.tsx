import React from 'react';
import { Users, Trophy, Briefcase, GraduationCap, MapPin, Search } from 'lucide-react';

const AlumniPage: React.FC = () => {
  const alumni = [
    {
      name: 'Dr. Sameer Verma',
      batch: 'Batch 1995',
      designation: 'Senior Cardiologist, AIIMS',
      achievement: 'Awarded Prestigious Medical Excellence Award 2022',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer'
    },
    {
      name: 'Ms. Priya Sharma',
      batch: 'Batch 2005',
      designation: 'Software Architect, Google',
      achievement: 'Led the development of Global AI Infrastructure',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya'
    },
    {
      name: 'Wing Commander Amit Singh',
      batch: 'Batch 2000',
      designation: 'IAF Fighter Pilot',
      achievement: 'Distinguished Service Medal recipient',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <Users size={600} />
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-serif font-bold mb-6 text-white tracking-tight">Our Alumni Network</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Celebrating the legacy of excellence. Connecting our past, present, and future generations of Air Force School Hindan students.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <button className="bg-af-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-xl">Join Network</button>
            <button className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-bold transition-all">Alumni Events</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Alumni', count: '5000+', icon: <Users /> },
            { label: 'Global Presence', count: '30+ Countries', icon: <MapPin /> },
            { label: 'Success Stories', count: '1000+', icon: <Trophy /> },
            { label: 'Batches', count: '45+', icon: <GraduationCap /> }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 text-center hover:transform hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-af-blue dark:text-af-light mx-auto mb-4">
                {stat.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.count}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Alumni */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white border-l-8 border-af-gold pl-6">Distinguished Alumni</h2>
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search alumni by name or batch..." 
              className="pl-12 pr-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl w-80 focus:ring-2 focus:ring-af-blue transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((person, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700">
              <div className="h-48 bg-gradient-to-br from-af-blue to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#fff,transparent)] transform group-hover:scale-110 transition-transform duration-700"></div>
              </div>
              <div className="px-8 pb-8 -mt-24 relative z-10 text-center">
                <div className="w-40 h-40 rounded-full border-8 border-white dark:border-gray-800 bg-white overflow-hidden mx-auto shadow-2xl transform group-hover:scale-105 transition-transform">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-af-blue transition-colors">{person.name}</h3>
                  <p className="text-af-blue dark:text-af-light font-bold text-sm uppercase tracking-widest mb-4">{person.batch}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{person.designation}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                      <Trophy size={16} className="text-af-gold" />
                      <span className="text-sm font-semibold">{person.achievement}</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-gray-50 dark:bg-gray-700 hover:bg-af-blue hover:text-white text-gray-900 dark:text-white font-bold rounded-xl transition-all border border-gray-200 dark:border-gray-600 group-hover:border-af-blue">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-af-blue rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join Your Alma Mater</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Register yourself in our alumni database to stay connected with your batchmates and the school.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-af-blue px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl">Registration Form</button>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl">Contact Alumni Cell</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;
