# Sanity Content Schema

To enable the Gallery functionality, please create the following schemas in your Sanity Studio.

We have provided ready-to-use schema definition files in the `sanity-schemas/` directory of this repository:
- `sanity-schemas/album.ts`
- `sanity-schemas/photo.ts`

## 1. Album (Schema Type: `album`)

A collection of photos.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The name of the album (e.g., "Annual Day 2023"). |
| `slug` | `slug` | Unique URL-friendly ID (generate from title). |
| `coverImage` | `image` | Representative image for the album. |
| `date` | `date` | Date of the event/album. |
| `description` | `text` | Optional description. |

## 2. Photo (Schema Type: `photo`)

An individual image entry.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | Title or caption for the photo. |
| `image` | `image` | The actual photo. **Important:** Enable `metadata` generation in Sanity to get width/height automatically. |
| `date` | `date` | Date taken (for sorting). |
| `album` | `reference` | Reference to an `album` document. |
| `tags` | `array` | Optional tags. |

## Sample GROQ Query used in Frontend

```groq
*[_type == "photo"]{
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
}
```

## Setup Instructions

1.  Log in to your Sanity Studio.
2.  Copy the files from `sanity-schemas/` to your Studio's `schemas/` folder.
3.  Register them in your `schema.ts` (or `index.ts`).
4.  Add some `album` documents.
5.  Add `photo` documents, uploading images and linking them to albums.
6.  Ensure your API dataset is `public` or add your token to `.env`.
