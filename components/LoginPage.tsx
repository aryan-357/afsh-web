import React, { useState } from 'react';
import { ArrowLeft, User, Lock, Loader2, Mail, Check, AlertCircle, Eye, EyeOff, ExternalLink } from 'lucide-react';

interface LoginPageProps {
  onLogin: (username: string) => void;
  onBack: () => void;
}

type AuthMode = 'login' | 'signup' | 'forgot-password';

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  
  // Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // UI State
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const resetForm = () => {
    setError('');
    setSuccess('');
    setUsername('');
    setPassword('');
    setEmail('');
    setSubmittedEmail('');
    setShowPassword(false);
  };

  const switchMode = (newMode: AuthMode) => {
    setMode(newMode);
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmittedEmail('');

    // Validation
    if (mode === 'login') {
        if (!username.trim() || !password.trim()) {
            setError('Please enter both username and password.');
            return;
        }
    } else if (mode === 'signup') {
        if (!username.trim() || !password.trim() || !email.trim()) {
            setError('All fields are required.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address.');
            return;
        }
    } else if (mode === 'forgot-password') {
        if (!email.trim() || !email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address.');
            return;
        }
    }

    setIsLoading(true);

    // Simulate API delay and checks
    setTimeout(() => {
      setIsLoading(false);

      if (mode === 'login') {
          // DEMO LOGIC: Simulate incorrect password
          // Specific check for 'wrong' or '1234' or mismatched username/password
          if (password === 'wrong' || password === '1234' || password === 'password') {
              setError('Incorrect password. Please try again.');
              setPassword(''); // Clear password field on error
              return;
          }
          // DEMO LOGIC: Simulate username not found
          if (username.toLowerCase() === 'unknown') {
             setError('Username not found in our records.');
             return;
          }

          onLogin(username);
      } 
      else if (mode === 'signup') {
          // DEMO LOGIC: Simulate taken username
          if (['admin', 'student', 'user', 'test'].includes(username.toLowerCase())) {
              setError('Username is already taken. Please choose another.');
              return;
          }
          setSuccess('Account created successfully! Redirecting to login...');
          setTimeout(() => switchMode('login'), 2000);
      } 
      else if (mode === 'forgot-password') {
          setSubmittedEmail(email);
          setSuccess(`Password reset link sent to ${email}`);
          setEmail(''); // Clear input for cleaner UI
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 relative overflow-hidden font-sans">
        {/* Background */}
        <div className="absolute inset-0 z-0">
             <img src="https://picsum.photos/seed/school1/1920/1080" className="w-full h-full object-cover opacity-30 blur-sm" alt="Background" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-af-blue/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-md px-6">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium uppercase tracking-wide group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to School
            </button>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in-up transition-all duration-300">
                <div className="text-center mb-8">
                    <img src="https://ecolearn.pages.dev/img/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                    <h2 className="text-2xl font-serif font-bold text-white mb-1">
                        {mode === 'login' && 'Student Portal'}
                        {mode === 'signup' && 'Create Account'}
                        {mode === 'forgot-password' && 'Reset Password'}
                    </h2>
                    <p className="text-blue-200 text-sm">
                        {mode === 'login' && 'Login to access your dashboard'}
                        {mode === 'signup' && 'Join the Air Force School community'}
                        {mode === 'forgot-password' && 'Recover your account access'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-xs p-3 rounded flex items-center justify-center gap-2 animate-fade-in">
                            <AlertCircle size={14} /> {error}
                        </div>
                    )}
                    
                    {/* Success Message */}
                    {success && (
                        <div className="bg-green-500/20 border border-green-500/50 text-green-200 text-xs p-3 rounded flex flex-col items-center justify-center gap-2 animate-fade-in text-center">
                            <div className="flex items-center gap-2">
                                <Check size={14} /> {success}
                            </div>
                            
                            {/* Gmail Deep Link */}
                            {mode === 'forgot-password' && submittedEmail.includes('@gmail.com') && (
                                <a 
                                    href="https://mail.google.com" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="mt-2 flex items-center gap-1 bg-white text-gray-900 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase hover:bg-gray-100 transition-colors"
                                >
                                    Open Gmail <ExternalLink size={10} />
                                </a>
                            )}
                        </div>
                    )}

                    {/* Username Input (Login & Signup) */}
                    {(mode === 'login' || mode === 'signup') && (
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
                    )}

                    {/* Email Input (Signup & Forgot Password) */}
                    {(mode === 'signup' || mode === 'forgot-password') && !success && (
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-blue-200 tracking-wider ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-af-gold/50 focus:bg-white/10 transition-all"
                                    placeholder="Enter your Email"
                                />
                            </div>
                        </div>
                    )}

                    {/* Password Input (Login & Signup) */}
                    {(mode === 'login' || mode === 'signup') && (
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-blue-200 tracking-wider ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:border-af-gold/50 focus:bg-white/10 transition-all"
                                    placeholder={mode === 'signup' ? "Create a strong password" : "Enter your Password"}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    {!success && (
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-af-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-blue-900/50 transition-all transform hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                            <> <Loader2 size={18} className="animate-spin" /> Processing... </>
                            ) : (
                            <>
                                {mode === 'login' && 'Login Securely'}
                                {mode === 'signup' && 'Register Account'}
                                {mode === 'forgot-password' && 'Send Reset Link'}
                            </>
                            )}
                        </button>
                    )}
                    
                    {/* Back to Login button (only for forgot password success state to allow easy return) */}
                    {mode === 'forgot-password' && success && (
                        <button
                            type="button"
                            onClick={() => switchMode('login')}
                            className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                             <ArrowLeft size={16} /> Back to Login
                        </button>
                    )}
                </form>

                {/* Footer Links */}
                <div className="mt-6 flex flex-col gap-3 text-center">
                    {mode === 'login' && (
                        <>
                            <button onClick={() => switchMode('forgot-password')} className="text-xs text-white/50 hover:text-af-gold transition-colors">
                                Forgot Password?
                            </button>
                            <div className="text-xs text-white/40">
                                Don't have an account? <button onClick={() => switchMode('signup')} className="text-white hover:text-af-gold font-bold transition-colors ml-1">Sign Up</button>
                            </div>
                        </>
                    )}
                    
                    {mode === 'signup' && (
                        <div className="text-xs text-white/40">
                            Already have an account? <button onClick={() => switchMode('login')} className="text-white hover:text-af-gold font-bold transition-colors ml-1">Login</button>
                        </div>
                    )}

                    {mode === 'forgot-password' && !success && (
                        <button onClick={() => switchMode('login')} className="flex items-center justify-center gap-1 text-xs text-white/50 hover:text-white transition-colors">
                            <ArrowLeft size={12} /> Back to Login
                        </button>
                    )}
                </div>
            </div>
            
            {/* Helper Hint for Demo */}
            {mode === 'login' && (
                <div className="mt-8 text-center animate-fade-in opacity-50 hover:opacity-100 transition-opacity">
                    <p className="text-[10px] text-white/30 bg-black/20 inline-block px-3 py-1 rounded-full">
                        Demo: Try password <span className="text-af-gold">"wrong"</span> or <span className="text-af-gold">"1234"</span> for error
                    </p>
                </div>
            )}
            {mode === 'signup' && (
                <div className="mt-8 text-center animate-fade-in opacity-50 hover:opacity-100 transition-opacity">
                    <p className="text-[10px] text-white/30 bg-black/20 inline-block px-3 py-1 rounded-full">
                         Demo: Try username <span className="text-af-gold">"admin"</span> for 'taken' error
                    </p>
                </div>
            )}
        </div>
    </div>
  );
};

export default LoginPage;