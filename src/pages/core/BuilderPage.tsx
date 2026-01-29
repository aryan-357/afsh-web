import React from 'react';
import { useTinaPage } from '../../hooks/useTinaPage';
import PageAnimate from '../../components/ui/PageAnimate';
import TinaBlocksRenderer from '../../components/TinaBlocksRenderer';

const BuilderPage: React.FC = () => {
    // We bind to a specific content file for this demo page
    const { data, loading } = useTinaPage('builder-demo.md');

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Loading content...</p>
                </div>
            </div>
        );
    }

    const blocks = data?.page?.blocks;

    if (!blocks) {
         return (
             <div className="container mx-auto p-10 text-center">
                 <h2 className="text-xl font-bold text-red-500">No content found</h2>
                 <p>Make sure content/pages/builder-demo.md exists and has the correct structure.</p>
                 <pre className="text-left bg-gray-100 p-4 mt-4 overflow-auto text-xs">
                     {JSON.stringify(data, null, 2)}
                 </pre>
             </div>
         );
    }

    return (
        <PageAnimate className="overflow-hidden">
            <TinaBlocksRenderer blocks={blocks} />
        </PageAnimate>
    );
};

export default BuilderPage;
