import { apiClient } from '../api/client';
import { BlogPost } from '../types/blog';

interface StrapiResponse<T> {
    data: T;
    meta?: any;
}

const POPULATE_ALL = 'populate[category]=*&populate[coverContent]=*&populate[authors]=*&populate[author]=*';

export const PostService = {
    getAllPosts: async (): Promise<BlogPost[]> => {
        try {
            const response = await apiClient.get<StrapiResponse<BlogPost[]>>(`/api/posts?${POPULATE_ALL}&sort=publishedAt:desc`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching all posts:', error);
            throw error;
        }
    },

    getLatestPosts: async (limit: number = 3): Promise<BlogPost[]> => {
        try {
            const response = await apiClient.get<StrapiResponse<BlogPost[]>>(`/api/posts?${POPULATE_ALL}&pagination[pageSize]=${limit}&sort[0]=publishedAt:desc`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching latest posts:', error);
            throw error;
        }
    },

    getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
        try {
            const response = await apiClient.get<StrapiResponse<BlogPost[]>>(`/api/posts?filters[slug][$eq]=${slug}&${POPULATE_ALL}`);
            if (response.data.data && response.data.data.length > 0) {
                return response.data.data[0];
            }
            return null;
        } catch (error) {
            console.error(`Error fetching post with slug ${slug}:`, error);
            throw error;
        }
    },

    getRelatedPosts: async (slug: string, limit: number = 3): Promise<BlogPost[]> => {
        try {
            const response = await apiClient.get<StrapiResponse<BlogPost[]>>(`/api/posts?filters[slug][$ne]=${slug}&pagination[pageSize]=${limit}&sort=publishedAt:desc&${POPULATE_ALL}`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching related posts:', error);
            return [];
        }
    }
};
