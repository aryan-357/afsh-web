import React, { useState } from 'react';
import { ArrowLeft, User, Lock, Loader2 } from 'lucide-react';
import Silk from './Silk';

interface LoginPageProps {
    onLogin: (username: string) => void;
    onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!username.trim() || !password.trim()) {
            setError('Please enter both username and password.');
            return;
        }

        setIsLoading(true);
        // Simulate API authentication delay
        setTimeout(() => {
            setIsLoading(false);
            onLogin(username);
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 relative overflow-hidden font-sans">
            {/* Silk Background */}
            {/* Silk Background overlay gradient */}
            <div className="absolute inset-0 z-0">
                <Silk
                    speed={2}
                    scale={1.2}
                    color="#1a365d"
                    noiseIntensity={1.5}
                    rotation={0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-md px-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium uppercase tracking-wide group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to School
                </button>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
                    <div className="text-center mb-8">
                        <img src="https://ecolearn.pages.dev/img/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                        <h2 className="text-2xl font-serif font-bold text-white mb-1">Student Portal</h2>
                        <p className="text-blue-200 text-sm">Login to access your dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-xs p-3 rounded text-center animate-fade-in">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-blue-200 tracking-wider ml-1">Username</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-af-gold/50 focus:bg-white/10 transition-all"
                                    placeholder="Enter your Username"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-blue-200 tracking-wider ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-af-gold/50 focus:bg-white/10 transition-all"
                                    placeholder="Enter your Password"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-af-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-blue-900/50 transition-all transform hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <> <Loader2 size={18} className="animate-spin" /> Authenticating... </>
                            ) : (
                                'Login Securely'
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-xs text-white/50 hover:text-af-gold transition-colors">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;