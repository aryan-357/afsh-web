
export interface Photo {
    src: string;
    width: number;
    height: number;
    title?: string;
    date: string; // ISO string 2024-01-01
    tags: string[];
    album: string; // "Annual Day 2024", "Sports Meet", or "Uncategorized"
}

// Helper to generate random consistent aspect ratios and dates
const generatePhotos = (): Photo[] => {
    const categories = ['Academics', 'Sports', 'Cultural', 'Campus'];
    const albums = ['Annual Function 2023', 'Sports Day 2024', 'Science Exhibition', 'Investiture Ceremony'];

    // We'll use picsum for now, but with specific dimensions to test masonry
    const configs = [
        { w: 1080, h: 720 }, // 3:2 Landscape
        { w: 720, h: 1080 }, // 2:3 Portrait
        { w: 1080, h: 1080 }, // 1:1 Square
        { w: 1600, h: 900 }, // 16:9 Wide
    ];

    return Array.from({ length: 40 }).map((_, i) => {
        const config = configs[Math.floor(Math.random() * configs.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const album = albums[Math.floor(Math.random() * albums.length)];

        // Random date in last 2 years
        const date = new Date(Date.now() - Math.floor(Math.random() * 63000000000)).toISOString().split('T')[0];

        return {
            src: `https://picsum.photos/seed/${i + 145}/${config.w}/${config.h}`,
            width: config.w,
            height: config.h,
            title: `${category} Moment ${i + 1}`,
            date: date,
            tags: [category, date.split('-')[0]],
            album: album
        };
    });
};

export const galleryData: Photo[] = generatePhotos();
