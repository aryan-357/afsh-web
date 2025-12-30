import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import BrandFooter from './BrandFooter';
import Footer from './Footer';

// Lazy load heavy components to reduce initial bundle size
// AssistantChat pulls in @google/genai (~100KB)
// LoginPage pulls in Silk/Three.js (~750KB)
const AssistantChat = lazy(() => import('../ui/AssistantChat'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    const [user, setUser] = useState<string | null>(null);
    const [showLogin, setShowLogin] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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

    const handleLogin = (username: string) => {
        setUser(username);
        setShowLogin(false);
    };

    if (showLogin) {
        return (
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-gray-900">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
                </div>
            }>
                <LoginPage
                    onLogin={handleLogin}
                    onBack={() => setShowLogin(false)}
                />
            </Suspense>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 font-sans selection:bg-af-blue selection:text-white">
            <Header
                user={user}
                onLoginClick={() => setShowLogin(true)}
                onLogout={() => setUser(null)}
                onNavigate={(page) => {
                    // Internal router navigation
                    if (page === 'home') {
                        navigate('/');
                    }
                    else if (page === 'news') {
                        navigate('/news');
                    }
                    else if (page === 'about') {
                        navigate('/about');
                    }
                    else if (page === 'gallery') {
                        navigate('/gallery');
                    }
                    else if (page === 'student-life') {
                        navigate('/student-life');
                    }
                    else if (page === 'admissions') {
                        navigate('/admissions');
                    }
                    else if (page === 'academics') {
                        navigate('/academics');
                    }
                    else if (page === 'scholars') {
                        navigate('/scholars');
                    }
                    else if (page.startsWith('#')) {
                        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                            const el = document.querySelector(page);
                            el?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            navigate('/' + page);
                        }
                    }
                }}
            />

            <div
                className="relative z-10 bg-white dark:bg-gray-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out min-h-screen"
                style={{ marginBottom: `${footerHeight}px` }}
            >
                <main>
                    {children}
                </main>
                <Footer />
            </div>

            <div ref={footerRef} className="fixed bottom-0 left-0 w-full z-0">
                <BrandFooter />
            </div>

            <Suspense fallback={null}>
                <AssistantChat />
            </Suspense>
        </div>
    );
};

export default Layout;
