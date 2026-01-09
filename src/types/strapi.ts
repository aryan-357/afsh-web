export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// Simplified Notice interface for Strapi 5 (Flat structure)
export interface Notice {
    id: number;
    documentId: string;
    title: string;
    content: string;
    date: string;
    isNew?: boolean;
    file?: {
        id: number;
        url: string;
        name: string;
        mime: string;
        size: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
