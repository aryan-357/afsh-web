import { StrapiResponse, Notice } from '../types/strapi';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'; // Fallback or use env

export const fetchNotices = async (page = 1, pageSize = 25): Promise<StrapiResponse<Notice[]>> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/notices?populate=file&sort=date:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching notices: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch notices:', error);
    throw error;
  }
};

export const fetchRecentNotices = async (limit = 3): Promise<StrapiResponse<Notice[]>> => {
  return fetchNotices(1, limit);
}
