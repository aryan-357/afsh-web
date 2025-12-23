# Air Force School Hindan Website Clone

## Overview
A React + Vite frontend application cloned from GitHub featuring a school website with modern design, interactive components, and Air Force school theme (blue and gold colors).

## Current Status
✅ Fully functional website with Gallery page (as of December 23, 2025)

## Features Implemented

### 1. Header Component
- Fixed navigation with dropdown submenus
- Dark/Light theme toggle
- Login/Logout functionality (login button removed per user request)
- Responsive mobile menu with hamburger icon
- Search functionality

### 2. Home Page
- **Hero Carousel** - Parallax carousel with multiple slides
- **Topper Section** - Displays top 3 academic achievers with stats
- **Latest News** - Continuous horizontal scrolling carousel (40-second animation)
- **Notice Board** - Important announcements
- **Philosophy Section** - Core values display
- **Footer** - Contact and links

### 3. Gallery Page (NEW)
- Beautiful grid layout with hover effects
- Category filters: All Events, Academics, Sports, Cultural, Campus Life, Awards
- 20+ placeholder images (easily replaceable with real photos)
- Lightbox modal for full image viewing
- Image captions and category badges
- Statistics section (total photos, events, etc.)
- Call-to-action section
- Fully responsive design

### 4. About & Blog Pages
- About page with school information
- Blog page for news articles
- Individual post details

## Design Theme
- **Primary Color**: Air Force Blue (#00308F)
- **Secondary Color**: Light Blue (#4C8BF5)
- **Accent Color**: Gold (#FFD700)
- **Dark Mode**: Full dark mode support throughout
- **Font**: Serif (logo), Sans-serif (body)

## Project Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── HomePage.tsx
│   ├── GalleryPage.tsx (NEW)
│   ├── AboutPage.tsx
│   ├── BlogPage.tsx
│   ├── PostDetails.tsx
│   ├── Layout.tsx
│   ├── TopperSection.tsx
│   ├── LatestNews.tsx
│   ├── NoticeBoard.tsx
│   ├── Footer.tsx
│   ├── parallax-carousel/
│   │   └── ParallexCarousel.tsx
│   └── latest-news.css
├── main-home.tsx (main app entry)
├── index.html
└── vite.config.ts
```

## Dependencies
- React 18+ with React Router
- Vite (build tool)
- Tailwind CSS (styling via CDN)
- Lucide React (icons)
- Three.js (3D effects)
- Embla Carousel (for carousel components)
- @google/genai (Google AI integration)

## Known Items for Future Work
1. **Images**: Replace placeholder images with real school photos
   - Gallery images at: `/src/components/GalleryPage.tsx` (lines with `picsum.photos` URLs)
   - Home page preview images at: `/src/components/HomePage.tsx` (line 56+)
   - Instructions: Replace image URLs with your actual photo URLs

2. **Tailwind CSS**: Currently using CDN version
   - Note: CDN warning in console about production use
   - Migration to PostCSS installation recommended for production

## User Preferences
- Theme: Maintain Air Force blue and gold colors
- Animations: Slower, endless animations (40+ seconds duration)
- Design: Professional, military school aesthetic
- Responsiveness: Full mobile support required

## Recent Changes (December 23, 2025)
- ✅ Created Gallery page with category filters
- ✅ Added Gallery link to header navigation
- ✅ 20 placeholder images across 6 categories
- ✅ Lightbox modal for image viewing
- ✅ Theme-consistent design with hover effects
- ✅ Dark mode support

## How to Customize

### Add Real Images to Gallery
Edit `src/components/GalleryPage.tsx`:
1. Find the `galleryItems` array (around line 14)
2. Replace `https://picsum.photos/seed/...` URLs with your image URLs
3. Update titles and descriptions as needed

### Add Real Images to Home Page
Edit `src/components/HomePage.tsx`:
1. Find the "Campus Life" section (line 49)
2. Replace placeholder image URLs with real photos

## Deployment
- Currently: Development (Vite server on port 5000)
- Production: Use Replit deployment tools
- Build command: `npm run build`
- Start command: `npm run dev`
