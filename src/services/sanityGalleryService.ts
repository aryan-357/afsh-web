import { sanityClient, urlFor } from '../lib/sanity';

export interface Photo {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  date: string;
  album: string;
}

const PHOTOS_QUERY = `*[_type == "photo"]{
  _id,
  title,
  date,
  image {
    asset->{
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  "album": album->title
}`;

// Mock Data for development or fallback
const MOCK_PHOTOS: Photo[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
    width: 1200,
    height: 1800,
    title: 'School Assembly',
    date: '2023-09-15',
    album: 'Annual Day 2023'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80',
    width: 1600,
    height: 1200,
    title: 'Science Fair',
    date: '2023-11-20',
    album: 'Events'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80',
    width: 1200,
    height: 800,
    title: 'Sports Day',
    date: '2022-12-05',
    album: 'Sports'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1427504743086-dad474e6d611?w=1200&q=80',
    width: 1600,
    height: 1067,
    title: 'Classroom Activity',
    date: '2024-01-10',
    album: 'Academics'
  }
];

export async function fetchGalleryData(): Promise<Photo[]> {
  // If no project ID is set, return mock data immediately
  if (!import.meta.env.VITE_SANITY_PROJECT_ID) {
    console.warn('Sanity Project ID not found. Using Mock Data.');
    return MOCK_PHOTOS;
  }

  try {
    const rawData = await sanityClient.fetch(PHOTOS_QUERY);

    return rawData.map((item: any) => ({
      id: item._id,
      src: item.image?.asset?.url || '', // Fallback or handle null
      width: item.image?.asset?.metadata?.dimensions?.width || 800,
      height: item.image?.asset?.metadata?.dimensions?.height || 600,
      title: item.title || 'Untitled',
      date: item.date || new Date().toISOString().split('T')[0],
      album: item.album || 'Uncategorized'
    }));
  } catch (error) {
    console.error('Failed to fetch from Sanity:', error);
    // Fallback to mock data on error so the page doesn't break
    return MOCK_PHOTOS;
  }
}
