import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { variables } from '@/constants/variables';

const { API_BASE_URL } = variables;

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    // Add default headers here
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return headers;
  },
});
