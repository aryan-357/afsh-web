# Strapi Gallery Integration Guide

This guide outlines how to set up Strapi to power the `GalleryPage` in the frontend.

## 1. Setup Strapi Backend

If you haven't already, create a new Strapi project:

```bash
npx create-strapi-app@latest backend
# Choose "Quickstart" or your preferred database
```

Start the server:
```bash
cd backend
npm run develop
```
The admin panel will be at `http://localhost:1337/admin`.

## 2. Create Content Types

You need to create two Collection Types: **Album** and **Photo**.

### A. Collection Type: `Album`
- **Display Name**: Album
- **Draft/Publish**: Enabled (Default)
- **Fields**:
  1. **Name** (Text, Short) - Required
  2. **Cover** (Media, Single Image) - Allowed types: Images
  3. **Date** (Date) - Required (Used for sorting and filtering by year)
  4. **Tags** (JSON) - *Optional* (Or use a separate "Tag" collection if preferred, but JSON is easier for simple arrays like `['Sports', '2024']`).
  5. **Photos** (Relation) - **Album** has many **Photos**.

### B. Collection Type: `Photo`
- **Display Name**: Photo
- **Draft/Publish**: Enabled
- **Fields**:
  1. **Title** (Text, Short) - *Optional*
  2. **Image** (Media, Single Image) - Required
  3. **Album** (Relation) - **Photo** belongs to one **Album**.

> **Note**: Alternatively, you can just have one `Album` type and use the Media Library's multi-upload for the photos, but having a `Photo` entry allows you to add captions/titles per photo if needed. 
> **Simpler Approach**: If you don't need per-photo metadata, just add a **Media (Multiple Images)** field to the **Album** type called `gallery_images`. **This is the recommended approach for this implementation.**

### **Recommended Simple Schema (Used in Code)**
**Collection Type: `Album`**
- **Title** (Text, Short)
- **Slug** (UID, attached to Title)
- **Cover** (Media, Single Image)
- **EventDate** (Date)
- **Category** (Enumeration: `Academic`, `Sports`, `Cultural`, `Campus`, `Other`)
- **Images** (Media, Multiple Images)

## 3. Permissions
Go to **Settings > Users & Permissions Plugin > Roles > Public**.
Check the following permissions:
- **Album**: `find`, `findOne`

## 4. Environment Variables
In your frontend `.env` file (create if missing), add:
```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_TOKEN=your_api_token_here 
# Token is optional if Public permissions are set, but recommended for production.
```
