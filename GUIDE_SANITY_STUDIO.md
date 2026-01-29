# Sanity Studio Guide

## 1. Accessing the Studio

You have successfully embedded Sanity Studio into your website.

- **Local Development**: Go to [http://localhost:5173/studio](http://localhost:5173/studio)
- **Production**: Go to `https://your-website.com/studio`

## 2. Important: CORS Configuration

Before you can log in or fetch data, you must add your website's URL to the **Allowed Origins** list in your Sanity Project settings.

1.  Go to [sanity.io/manage](https://www.sanity.io/manage).
2.  Select your project (`wi9anp87`).
3.  Go to **API** tab.
4.  Scroll to **CORS Origins**.
5.  Click **Add CORS Origin**.
6.  Add `http://localhost:5173` (enable "Allow credentials").
7.  Add your production URL (e.g., `https://afsh-web.pages.dev` or similar) (enable "Allow credentials").

## 3. Uploading Photos

Once logged in to the Studio:

1.  **Create an Album**:
    - Click "Album" in the content pane.
    - Click the "+" (Create new).
    - Enter a Title (e.g., "Sports Day 2024").
    - Upload a Cover Image.
    - Click **Publish**.

2.  **Upload Photos**:
    - Click "Photo" in the content pane.
    - Click "+" (Create new).
    - Upload your image.
    - Link it to the "Album" you just created.
    - (Optional) Add a title or tags.
    - Click **Publish**.

## 4. Viewing the Gallery

Return to your main website (e.g., `/gallery`). The photos you published should now appear in the gallery grid!
