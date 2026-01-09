# Gallery Redevelopment Plan

## 1. Architecture Overview

To achieve a highly responsive, metadata-rich, and sortable gallery that sources from Google Photos, we will implement a **Sync-based Architecture**.

Directly fetching from Google Photos API on the client-side has significantly downsides:
- **Rate Limits & Auth**: Requires complex OAuth2 flows for every visitor or a proxy.
- **URL Expiration**: Google Photos API image URLs expire after 60 minutes.
- **Sorting/Pagination**: Efficiently sorting and paging through thousands of remote photos by arbitrary dates/tags is slow without a local index.

**The Solution**: We will use your existing Strapi backend as the "Cache" and "Index". We will create a script to **sync** photos from a Google Photos Album into Strapi.

### Data Flow
1.  **Source**: Google Photos Album (User provides Album ID/Auth).
2.  **Ingestion**: A local Node.js script (`scripts/sync-photos.ts`) fetches images + metadata (Date, Dimensions).
3.  **Storage**: 
    - Images are uploaded to Strapi's Media Library (via Cloudinary provider) -> **Permanent URLs**.
    - Metadata is stored in a new `Photo` Javascript Collection in Strapi.
4.  **Frontend**: Fetches from Strapi (fast, paginated, filterable).

## 2. Strapi Content Types

We need to create/modify these schemas in Strapi:

### A. `Album` (Collection Type)
Represents a container (folder).
- `Name` (Text)
- `Slug` (UID)
- `CoverImage` (Media)
- `GooglePhotosId` (Text, Private) - To link for syncing.
- `DateRange` (Date - calculated)

### B. `Photo` (Collection Type)
Represents a single image.
- `Image` (Media) - The actual file.
- `Caption` (Text)
- `DateTaken` (DateTime) - Important for sorting.
- `Width` (Integer) - For Masonry layout calculations.
- `Height` (Integer)
- `Album` (Relation -> `Album`)
- `Tags` (Coming from GPhotos description or analyzed tags).

## 3. Frontend Implementation (React/Vite)

### Key Features
- **Masonry Layout**: We will use `react-photo-album` or a custom CSS Grid implementation to respect aspect ratios perfectly.
- **View Switcher**: A toggle in the top-right to switch between:
  - **All Photos**: A master stream of everything sorted by date.
  - **Albums View**: A grid of Folder cards.
- **Sidebar**: A `Framer Motion` powered drawer (hidden by default).
  - **Year Selector**: Accordion or timeline.
  - **Date Range**: Date pickers.
  - **Sort**: "Latest first", "Oldest first".

### Component Structure
```text
src/pages/GalleryPage.tsx
├── GalleryHeader
│   └── ViewToggler (All vs Albums)
├── FilterSidebar (AnimatePresence sidebar)
├── GalleryContent
│   ├── AlbumGrid (if View == Albums)
│   └── PhotoMasonry (if View == All or inside Album)
│       └── PhotoCard (Lazy loaded, aspect ratio preserved)
└── Pagination (Custom component)
```

## 4. Execution Steps (The Workflow)

### Phase 1: Backend Setup
1.  Define `Album` and `Photo` Content Types in Strapi.
2.  (Optional but Recommended) Setup the Google Photos Sync Script logic (requires Google Cloud Console credentials). *For now, we can manually upload to test the UI.*

### Phase 2: Frontend UI Construction (Aesthetics First)
1.  **Scaffold**: Create `GalleryLayout` and Sidebar.
2.  **Masonry**: Implement the responsive grid using mock data that mimics the structure of our future API.
3.  **Styling**: Apply the "Premium" glassmorphism and animations.
4.  **Responsiveness**: Ensure columns adjust from 1 (Mobile) to 4+ (Desktop).

### Phase 3: Integration
1.  Connect React to Strapi `photos` endpoint.
2.  Implement Server-Side filtering (pass `filters[date][$gte]=...` to Strapi).
3.  Implement Pagination.

### Phase 4: The fetching Mechanism (Sync Script)
1.  Write a script using `googleapis` to read an Album.
2.  Download the bytes and upload to Strapi `/upload`.
3.  Create the `Photo` entry.

## 5. Immediate Action Plan (This Session)
We will focus on **Phase 2 (Frontend UI)** to satisfy the request for "highly responsive", "aspect ratio", and "sidebar". We will build this with an interface connected to Mock Data first, so you can see the behavior immediately.

**Mock Data Structure**:
We will create a helper `services/gallery.mock.ts` that generates dummy photos with varying aspect ratios and dates to test the sorting/masonry logic.
