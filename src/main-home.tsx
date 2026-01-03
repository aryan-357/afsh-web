import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const PostDetails = lazy(() => import('./pages/PostDetails'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const StudentLifePage = lazy(() => import('./pages/StudentLifePage'));
const AdmissionPage = lazy(() => import('./pages/AdmissionPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const AlumniPage = lazy(() => import('./pages/AlumniPage'));
const AlumniRegistrationPage = lazy(() => import('./pages/AlumniRegistrationPage'));
const CalendarPageNew = lazy(() => import('./pages/CalendarPageNew'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ScholarsPage = lazy(() => import('./pages/ScholarsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

// Loading spinner component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Loading...</p>
        </div>
    </div>
);

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:slug" element={<PostDetails />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/student-life" element={<StudentLifePage />} />
                        <Route path="/admissions" element={<AdmissionPage />} />
                        <Route path="/academics" element={<AcademicsPage />} />
                        <Route path="/alumni" element={<AlumniPage />} />
                        <Route path="/alumni/register" element={<AlumniRegistrationPage />} />
                        <Route path="/calendar" element={<CalendarPageNew />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/scholars" element={<ScholarsPage onBack={() => window.history.back()} />} />
                        <Route path="/login" element={<LoginPage onLogin={() => { }} onBack={() => window.history.back()} />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);
