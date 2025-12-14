import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import NoticeBoard from './components/NoticeBoard';
import LatestNews from './components/LatestNews';
import PrincipalMessage from './components/PrincipalMessage';
import Footer from './components/Footer';
import AssistantChat from './components/AssistantChat';
import BrandFooter from './components/BrandFooter';
import LoginPage from './components/LoginPage';
import ScholarsPage from './components/ScholarsPage';

// Home Component acting as the Landing Page
const Home: React.FC<{ user: string | null; onLogout: () => void }> = ({ user, onLogout }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    const timer = setTimeout(updateFooterHeight, 500);

    return () => {
      window.removeEventListener('resize', updateFooterHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Header 
        user={user} 
        onLogout={onLogout}
      />
      
      {/* Main Content Wrapper */}
      <div 
        className="relative z-10 bg-white dark:bg-gray-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out min-h-screen"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        <main>
          <HeroCarousel />
          
          <section id="news">
            <LatestNews />
          </section>

          <section id="admission">
            <NoticeBoard />
          </section>
          
          <section id="academics" className="bg-white dark:bg-gray-900 py-12 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
              <span className="text-af-blue dark:text-af-light font-bold tracking-widest text-xs uppercase mb-2 block">Our Philosophy</span>
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8 max-w-2xl mx-auto">
                Fostering Excellence, Integrity, and Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {[
                  { title: 'Academic Excellence', icon: '🎓', desc: 'Rigorous curriculum designed to challenge and inspire students.' },
                  { title: 'Character Building', icon: '⭐', desc: 'Instilling values of discipline, honesty, and responsibility.' },
                  { title: 'Physical Fitness', icon: '🏆', desc: 'Comprehensive sports programs for a healthy body and mind.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-600 group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div id="about">
            <PrincipalMessage />
          </div>

          <section id="student-life" className="py-16 bg-gray-900 text-white mb-20">
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

          <section id="contact">
            <Footer />
          </section>
        </main>
      </div>

      {/* Fixed Footer Section */}
      <div ref={footerRef} className="fixed bottom-0 left-0 w-full z-0">
        <BrandFooter />
      </div>
      
      <AssistantChat />
    </>
  );
};

function App() {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 font-sans selection:bg-af-blue selection:text-white">
      <Routes>
        <Route 
          path="/" 
          element={<Home user={user} onLogout={() => setUser(null)} />} 
        />
        <Route 
          path="/login" 
          element={
            <LoginPage 
              onLogin={(username) => {
                setUser(username);
                navigate('/');
              }} 
            />
          } 
        />
        <Route 
          path="/scholars" 
          element={<ScholarsPage />} 
        />
      </Routes>
    </div>
  );
}

export default App;