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
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'));
const MandatoryDisclosurePage = lazy(() => import('./pages/MandatoryDisclosurePage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const GalleryAdmin = lazy(() => import('./pages/admin/GalleryAdmin'));
const DevelopmentPage = lazy(() => import('./pages/DevelopmentPage'));

import { GoogleOAuthProvider } from '@react-oauth/google';

// Get Client ID from env or storage (for the admin panel)
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GALLERY_GOOGLE_CLIENT_ID || localStorage.getItem('google_client_id') || "PLACEHOLDER_CLIENT_ID_PLEASE_CONFIGURE";

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
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
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
                            <Route path="/achievements" element={<AchievementsPage />} />
                            <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage />} />
                            <Route path="/facilities" element={<FacilitiesPage />} />
                            <Route path="/news" element={<NewsPage />} />
                            <Route path="/notices" element={<NoticesPage />} />
                            <Route path="/login" element={<LoginPage onLogin={() => { }} onBack={() => window.history.back()} />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/admin/gallery" element={<GalleryAdmin />} />
                            <Route path="/development" element={<DevelopmentPage />} />
                        </Routes>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
