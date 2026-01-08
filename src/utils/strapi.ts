export const getStrapiURL = (path = '') => {
    const baseURL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
    // Remove trailing slash from base and leading slash from path to avoid double slashes
    const cleanBase = baseURL.replace(/\/$/, '');
    const cleanPath = path.replace(/^\//, '');
    return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
};

export const getStrapiMedia = (url?: string) => {
    if (!url) return undefined;
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }
    return getStrapiURL(url);
};

export const extractImageUrl = (imageData: any) => {
    if (!imageData) return null;

    // Handle Array (Multiple Media)
    if (Array.isArray(imageData) && imageData.length > 0) {
        return imageData[0].url;
    }

    // Handle Object (Single Media)
    if (typeof imageData === 'object' && imageData.url) {
        return imageData.url;
    }

    // Handle Strapi 5 specific 'document' wrapper structure if applicable
    if (imageData.document && imageData.document.url) {
        return imageData.document.url;
    }

    return null;
};
