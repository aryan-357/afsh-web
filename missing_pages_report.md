# Missing Pages Report

Based on the analysis of the application routing (`src/main-home.tsx`) and the navigation menu (`src/components/layout/Header.tsx`), the following pages are currently active in the routing but are **not listed** in the main navigation bar or its dropdowns:

## 1. Blog
- **Route:** `/blog`
- **Component:** `BlogPage`
- **Status:** Fully functional page but completely missing from the navigation.

## 2. Mandatory Disclosure
- **Route:** `/mandatory-disclosure`
- **Component:** `MandatoryDisclosurePage`
- **Status:** Missing from the Header navigation (currently only accessible via the Footer).

## 3. Login
- **Route:** `/login`
- **Component:** `LoginPage`
- **Status:** There is no explicit "Login" link in the header for guest users, although there is logic to show user status once logged in.

## 4. Development Page (Excluded per request)
- **Route:** `/development`
- **Component:** `DevelopmentPage`

## Note on Admin/Broken Routes
- The route `/admin/gallery` points to a non-existent component (`src/pages/admin/GalleryAdmin`), causing build errors. This page is effectively missing/broken.

## Recommendation
Consider adding "Mandatory Disclosure" to the "About" dropdown or the Utility Bar (top right), and "Blog" to the "Student Life" or a new "News & Blog" section if desired.
