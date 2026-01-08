export const getStrapiURL = (path = '') => {
    return `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${path}`;
};

export const getStrapiMedia = (url?: string) => {
    if (!url) return undefined;
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }
    return getStrapiURL(url);
};
