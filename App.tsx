import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import NoticeBoard from './components/NoticeBoard';
import PrincipalMessage from './components/PrincipalMessage';
import Footer from './components/Footer';
import AssistantChat from './components/AssistantChat';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-af-blue selection:text-white">
      <Header />
      <main>
        <HeroCarousel />
        <NoticeBoard />
        
        {/* About/Vision Snippet Section */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <span className="text-af-blue font-bold tracking-widest text-xs uppercase mb-2 block">Our Philosophy</span>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 max-w-2xl mx-auto">
              Fostering Excellence, Integrity, and Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { title: 'Academic Excellence', icon: '🎓', desc: 'Rigorous curriculum designed to challenge and inspire students.' },
                { title: 'Character Building', icon: '⭐', desc: 'Instilling values of discipline, honesty, and responsibility.' },
                { title: 'Physical Fitness', icon: '🏆', desc: 'Comprehensive sports programs for a healthy body and mind.' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="about">
          <PrincipalMessage />
        </div>

        {/* Gallery Preview */}
        <section id="gallery" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
             <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold">Campus Life</h2>
                  <p className="text-gray-400 mt-2">Glimpses of activities at AF School Hindan</p>
                </div>
                <button className="hidden md:block border border-white px-6 py-2 hover:bg-white hover:text-black transition uppercase text-xs font-bold tracking-widest">View Gallery</button>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                <img src="https://picsum.photos/seed/campus1/400/300" className="w-full h-48 object-cover rounded hover:opacity-90 transition" alt="Campus 1" />
                <img src="https://picsum.photos/seed/campus2/400/300" className="w-full h-48 object-cover rounded hover:opacity-90 transition" alt="Campus 2" />
                <img src="https://picsum.photos/seed/campus3/400/300" className="w-full h-48 object-cover rounded hover:opacity-90 transition" alt="Campus 3" />
                <img src="https://picsum.photos/seed/campus4/400/300" className="w-full h-48 object-cover rounded hover:opacity-90 transition" alt="Campus 4" />
             </div>
             <button className="md:hidden mt-6 w-full border border-white px-6 py-3 hover:bg-white hover:text-black transition uppercase text-xs font-bold tracking-widest">View Gallery</button>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Assistant Widget */}
      <AssistantChat />
    </div>
  );
}

export default App;