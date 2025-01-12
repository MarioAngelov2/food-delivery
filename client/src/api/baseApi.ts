import { adminLoginStore } from "@/zustand/store";
import axios from "axios";

const URL = "http://localhost:3000";

const baseApi = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor to add token to request headers
baseApi.interceptors.request.use(
  (config) => {
    const token = adminLoginStore.getState().data?.accessToken;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle expired token (401) and refresh it
baseApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is due to an expired token (401), try to refresh the token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh token
        const { refreshToken } = adminLoginStore.getState();
        await refreshToken();

        const { data } = adminLoginStore.getState();

        if (data?.accessToken) {
          originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
          return baseApi(originalRequest);
        }
      } catch (error) {
        console.error("Failed to refresh token", error);
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export const get = async (url: string, config = {}) => baseApi.get(url, config);
export const post = async (url: string, data: {}, config = {}) =>
  baseApi.post(url, data, config);
export const put = async (url: string, data: {}, config = {}) =>
  baseApi.put(url, data, config);
export const del = async (url: string, config = {}) =>
  baseApi.delete(url, config);
