export interface BlogPost {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    body: any[];
    publishedAt: string;
    description?: string | null;
    category?: {
        name: string;
    } | null;
    author?: {
        name: string;
    } | null;
    coverContent?: {
        url: string;
    } | null;
}
