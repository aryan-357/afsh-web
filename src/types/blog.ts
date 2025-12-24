export interface BlogPost {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    content: string;
    publishedAt: string;
    description?: string; // Adding description/excerpt as it's common in list views
    category?: {
        name: string;
    };
    author?: {
        name: string;
    };
    cover?: {
        url: string;
    };
}
