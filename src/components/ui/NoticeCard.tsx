import React from 'react';
import { Notice } from '../../types/strapi';
import { Calendar, FileText, Download } from 'lucide-react';

interface NoticeCardProps {
    notice: Notice;
    compact?: boolean;
}

const NoticeCard: React.FC<NoticeCardProps> = ({ notice, compact = false }) => {
    const attributes = notice?.attributes;
    if (!attributes) return null;
    const { title, date, file, content, isNew } = attributes;
    const fileUrl = file?.data?.attributes?.url;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            {isNew && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    NEW
                </div>
            )}
            <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    {fileUrl && (
                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            title="Download PDF"
                        >
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            {!compact && "Download"}
                        </a>
                    )}
                </div>

                <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    {content && !compact && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                            {content}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NoticeCard;
