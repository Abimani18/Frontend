import axios from 'axios';
import { API_URLS } from './apiConfig';

const apiInstance = axios.create({
  baseURL: API_URLS.API_BASE_URL, // Your API base URL
  timeout: 5000, // Timeout duration
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers needed for your requests
  },
});

export default apiInstance;
