import axios from 'axios';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

export const strapi = axios.create({
    baseURL: `${STRAPI_URL}/api`,
    headers: STRAPI_TOKEN ? {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
    } : {},
});

export interface StrapiImage {
    id: number;
    documentId: string;
    url: string;
    width: number;
    height: number;
    alternativeText?: string;
    formats?: {
        thumbnail?: { url: string; width: number; height: number };
        small?: { url: string; width: number; height: number };
        medium?: { url: string; width: number; height: number };
        large?: { url: string; width: number; height: number };
    };
}

export interface StrapiAlbum {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    eventDate: string;
    category: string;
    cover: StrapiImage;
    images: StrapiImage[];
}

// Helper to get full image URL
export const getStrapiMedia = (url: string) => {
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }
    return `${STRAPI_URL}${url}`;
};

export const getAlbums = async () => {
    try {
        const response = await strapi.get('/albums', {
            params: {
                populate: ['cover', 'images'],
                sort: ['eventDate:desc'],
            },
        });

        // Normalize Strapi v5 / v4 response structure
        // Strapi v5 returns { data: [...] } where items are directly the objects (mostly)
        // Strapi v4 returns { data: [ { id, attributes: { ... } } ] }

        const data = response.data.data;

        // Basic normalization check (naive)
        if (Array.isArray(data) && data.length > 0 && 'attributes' in data[0]) {
            return data.map((item: any) => ({
                id: item.id,
                documentId: item.documentId || item.id, // v5 vs v4
                ...item.attributes,
                cover: item.attributes.cover?.data?.attributes ? { ...item.attributes.cover.data.attributes, id: item.attributes.cover.data.id } : null,
                images: item.attributes.images?.data?.map((img: any) => ({ ...img.attributes, id: img.id })) || []
            })) as StrapiAlbum[];
        }

        return data as StrapiAlbum[];
    } catch (error) {
        console.error("Error fetching albums from Strapi:", error);
        return [];
    }
};
