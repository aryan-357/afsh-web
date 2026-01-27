# Sanity Content Schema

To enable the Gallery functionality, please create the following schemas in your Sanity Studio.

## 1. Album (Schema Type: `album`)

A collection of photos.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The name of the album (e.g., "Annual Day 2023"). |
| `slug` | `slug` | Unique URL-friendly ID (generate from title). |
| `coverImage` | `image` | Representative image for the album. |

## 2. Photo (Schema Type: `photo`)

An individual image entry.

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | Title or caption for the photo. |
| `image` | `image` | The actual photo. **Important:** Enable `metadata` generation in Sanity to get width/height automatically. |
| `date` | `date` | Date taken (for sorting). |
| `album` | `reference` | Reference to an `album` document. |

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
2.  Define the schemas above in your `schema` folder.
3.  Add some `album` documents.
4.  Add `photo` documents, uploading images and linking them to albums.
5.  Ensure your API dataset is `public` or add your token to `.env` (though the current implementation uses the public client).
