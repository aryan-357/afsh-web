import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load page components for code splitting
const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const PostDetails = lazy(() => import('./components/PostDetails'));
const GalleryPage = lazy(() => import('./components/GalleryPage'));
const StudentLifePage = lazy(() => import('./components/StudentLifePage'));
const AdmissionPage = lazy(() => import('./components/AdmissionPage'));
const AcademicsPage = lazy(() => import('./components/AcademicsPage'));

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
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);
