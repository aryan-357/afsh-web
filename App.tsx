import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AssistantChat from '@/components/AssistantChat';
import BrandFooter from '@/components/BrandFooter';
import Home from '@/pages/Home';
import GalleryPage from '@/pages/Gallery';
import LoginPage from '@/pages/Login';

// ScrollToTop: Handles scrolling when route changes or hash is present
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If hash exists, wait for render then scroll
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If new page (no hash), scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Layout: Wraps pages that need Header, Footer, and Chat
interface LayoutProps {
  user: string | null;
  onLogout: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ user, onLogout, children }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    // Recalculate after short delay to allow content to settle
    const timer = setTimeout(updateFooterHeight, 500);

    return () => {
      window.removeEventListener('resize', updateFooterHeight);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-900 font-sans selection:bg-af-blue selection:text-white">
      <Header user={user} onLoginClick={() => navigate('/login')} onLogout={onLogout} />
      
      {/* Main Content "Curtain" Effect */}
      <div 
        className="relative z-10 bg-white dark:bg-gray-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out"
        style={{ marginBottom: `${footerHeight}px`, minHeight: '100vh' }}
      >
        <main>
          {children}
        </main>
      </div>

      {/* Fixed Footer Reveal */}
      <div ref={footerRef} className="fixed bottom-0 left-0 w-full z-0">
        <BrandFooter />
      </div>
      
      <AssistantChat />
    </div>
  );
};

function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Login Route - Standalone */}
        <Route path="/login" element={
          <LoginPage onLogin={(u) => setUser(u)} />
        } />
        
        {/* Home Route */}
        <Route path="/" element={
          <Layout user={user} onLogout={() => setUser(null)}>
            <Home />
          </Layout>
        } />

        {/* Gallery Route */}
        <Route path="/gallery" element={
          <Layout user={user} onLogout={() => setUser(null)}>
            <GalleryPage />
          </Layout>
        } />

        {/* Fallback Route */}
        <Route path="*" element={
          <Layout user={user} onLogout={() => setUser(null)}>
             <div className="pt-32 pb-20 text-center min-h-[50vh] bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
               <h1 className="text-4xl font-bold mb-4">404</h1>
               <p>Page not found</p>
             </div>
           </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;