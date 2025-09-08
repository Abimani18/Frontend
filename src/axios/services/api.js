// src/services/api.js
import apiInstance from "../axiosInstance";
import { API_URLS } from "../apiConfig";


export const subscribe = async (email) => {
  try {
    const response = await apiInstance.post(API_URLS.subscribe, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add other API functions as needed

export const loginWithGoogle = async () => {
  try {
    const response = await apiInstance.get(API_URLS.googleLogin);
    return response.data;
  } catch (error) {
    throw error;
  }
};

