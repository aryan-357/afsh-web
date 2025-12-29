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

### 3. Academics Page (NEW)
- **Curriculum Section** - 4 educational levels (Primary through Senior Secondary)
- **Departments** - 6 interactive departments with expandable details
  - English, Mathematics, Science, Social Studies, Languages, Arts & Skills
  - Faculty count, subjects offered, achievements, and department heads
- **Academic Calendar** - Color-coded events throughout the year
- **Top Scholars** - Featured academic achievers with percentages
- **Key Highlights** - Faculty, library, labs, and tech facilities
- Dark mode support and fully responsive design

### 4. Admission Page (NEW)
- **Admission Process** - 6-step visual guide
- **Fee Structure** - Complete fee table with all classes
- **Admission Inquiry Form** - Students can submit admission queries
- **Transfer Certificate Section** - Procedure and documentation requirements
- **FAQs** - 8 commonly asked questions with detailed answers
- **Contact Information** - Office phone, email, and hours
- Fully responsive design with dark mode support

### 5. Student Life Page
- **Houses Section** - Four houses with unique identities and colors
  - Arjan House (Blue), Sekhon House (Red), Subroto House (Yellow), Katre House (Green)
  - Each house has motto, house master, achievements, and member count
  - Interactive cards with hover effects
- **Clubs & Societies** - 8 different clubs for diverse student interests
- **Sports Program** - 10+ sports with competition levels
- **NCC Section** - Detailed information about National Cadet Corps
  - Units, strength, commandant information
  - Notable achievements showcase
- Fully responsive design matching Air Force theme

### 6. Gallery Page
- Beautiful grid layout with hover effects
- Category filters: All Events, Academics, Sports, Cultural, Campus Life, Awards
- 20+ placeholder images (easily replaceable with real photos)
- Lightbox modal for full image viewing
- Image captions and category badges
- Statistics section (total photos, events, etc.)
- Call-to-action section
- Fully responsive design

### 7. About & Blog Pages
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

## Recent Changes (December 27, 2025)

### New Pages & Navigation
- ✅ **Academic Calendar Page** - Monthly event display with holiday and exam markers
- ✅ **Alumni Network Page** - Distinguished alumni showcase, stats, and registration
- ✅ **Header Refresh** - Updated utility bar (top bar) to prioritize Alumni and Calendar
- ✅ **Footer Links** - Fully functional quick links to all main pages
- ✅ **Improved Routing** - All navigation elements now correctly route to respective pages

### Academics Page (Latest)
- ✅ Created comprehensive Academics page
- ✅ **Curriculum Section** - 4 levels with features and descriptions
  - Primary (Classes I-V) - Foundation Building
  - Upper Primary (Classes VI-VIII) - Concept Mastery
  - Secondary (Classes IX-X) - Board Preparation
  - Senior Secondary (Classes XI-XII) - Higher Learning
- ✅ **Academic Departments** - 6 expandable departments
  - English, Mathematics, Science, Social Studies, Languages, Arts & Skills
  - Each with subjects, achievements, and department head info
- ✅ **Academic Calendar** - Full year events and important dates
- ✅ **Top Scholars Section** - Featured academic achievers
- ✅ **Key Highlights** - Faculty, Library, Labs, Tech facilities
- ✅ Full dark mode and responsive design
- ✅ Updated Header navigation with /academics route

### Admission Page
- ✅ Created comprehensive Admission page
- ✅ **Admission Process** - 6-step visual process flow
- ✅ **Fee Structure** - Detailed table with all class fees
- ✅ **Admission Inquiry Form** - Functional contact form with validation
  - Student name, email, phone, class selection
  - Guardian name, message fields
  - Success confirmation message
- ✅ **Transfer Certificate Section** - Procedure and requirements
- ✅ **FAQs** - 8 comprehensive frequently asked questions
- ✅ **Contact Information** - Office details and hours
- ✅ Theme-consistent design matching entire website
- ✅ Dark mode support

### Student Life Page
- ✅ Created comprehensive Student Life page
- ✅ **The Four Houses** section with detailed cards:
  - **Arjan House** (Blue #2563EB) - "The Sky Guardians"
  - **Sekhon House** (Red #DC2626) - "The Brave Hearts"
  - **Subroto House** (Yellow #FBBF24) - "The Shining Stars"
  - **Katre House** (Green #16A34A) - "The Green Guardians"
- ✅ Each house includes: icon, motto, house master, achievements, member count
- ✅ **Clubs & Societies** section (8 clubs with descriptions)
- ✅ **Sports Program** section (10+ sports with competition levels)
- ✅ **NCC Section** with detailed achievements and cadet information
- ✅ Fully responsive design with dark mode support
- ✅ Theme-consistent design matching home page

### Previous Changes (December 23, 2025)
- ✅ Created Gallery page with category filters
- ✅ Added Gallery link to header navigation
- ✅ 20 placeholder images across 6 categories
- ✅ Lightbox modal for image viewing

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
