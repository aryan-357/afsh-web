export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface Notice {
  id: string;
  date: string;
  title: string;
  link: string;
  isNew?: boolean;
  content?: string;
}

export interface CarouselSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  category: 'All' | 'Academics' | 'Sports' | 'Events' | 'Campus';
}

export interface NewsItem {
  id: number;
  title: string;
  image: string;
  alignment: 'center' | 'bottom';
  hasButton: boolean;
  borderColor: string;
  link: string;
  date?: string;
  category?: string;
  excerpt?: string;
}