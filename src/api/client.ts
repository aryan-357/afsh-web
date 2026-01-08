import axios from 'axios';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export const apiClient = axios.create({
    baseURL: STRAPI_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// Response Interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Log errors globall or send to logging service
        console.error('API Error:', error.response?.status, error.message);
        return Promise.reject(error);
    }
);
