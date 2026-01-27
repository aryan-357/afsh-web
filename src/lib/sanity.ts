import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// These should be set in your .env file or Cloudflare environment variables
const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';

// Fallback to avoid crash if env vars are missing
// The service layer handles the actual check before fetching
const validProjectId = projectId || 'placeholder-id';

export const sanityClient = createClient({
  projectId: validProjectId,
  dataset: dataset,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper function for generating image URLs
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
