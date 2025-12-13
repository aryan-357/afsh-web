import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import GalleryPage from './components/GalleryPage';
import AssistantChat from './components/AssistantChat';
import BrandFooter from './components/BrandFooter';
import LoginPage from './components/LoginPage';

// Enhanced ScrollToTop component to handle hash navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, attempt to scroll to the element
    if (hash) {
      // Small timeout to allow the DOM to update after a route change
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // If no hash is present, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Layout component to wrap pages that share Header/Footer
interface LayoutProps {
  user: string | null;
  onLogout: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ user, onLogout, children }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    
    // Update when location changes (in case footer content changes)
    const timer = setTimeout(updateFooterHeight, 500);

    return () => {
      window.removeEventListener('resize', updateFooterHeight);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-900 font-sans selection:bg-af-blue selection:text-white">
      <Header user={user} onLogout={onLogout} />
      
      {/* Main Content Wrapper - Acts as the "Curtain" */}
      <div 
        className="relative z-10 bg-white dark:bg-gray-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        <main>
          {children}
        </main>
      </div>

      {/* Fixed Footer Section - The Reveal */}
      <div ref={footerRef} className="fixed bottom-0 left-0 w-full z-0">
        <BrandFooter />
      </div>
      
      {/* AI Assistant Widget */}
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
        <Route path="/login" element={
          <LoginPage 
            onLogin={(username) => setUser(username)} 
          />
        } />
        
        <Route path="/" element={
          <Layout user={user} onLogout={() => setUser(null)}>
            <Home />
          </Layout>
        } />

        <Route path="/gallery" element={
          <Layout user={user} onLogout={() => setUser(null)}>
            <GalleryPage />
          </Layout>
        } />
        
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