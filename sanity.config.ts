import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import album from './sanity-schemas/album'
import photo from './sanity-schemas/photo'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'placeholder-id'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'AFSH Gallery Studio',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [album, photo],
  },
})
