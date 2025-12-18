import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import BrandFooter from './BrandFooter';
import AssistantChat from './AssistantChat';
import LoginPage from './LoginPage';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<string | null>(null);
    const [showLogin, setShowLogin] = useState(false);

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
            <LoginPage
                onLogin={handleLogin}
                onBack={() => setShowLogin(false)}
            />
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
                        navigate('/blog');
                    }
                    else if (page === 'scholars') {
                        window.location.href = '/scholars'; // If scholars is a separate app/page
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
            </div>

            <div ref={footerRef} className="fixed bottom-0 left-0 w-full z-0">
                <BrandFooter />
            </div>

            <AssistantChat />
        </div>
    );
};

export default Layout;
