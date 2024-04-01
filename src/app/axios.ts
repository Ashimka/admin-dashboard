import axios from "axios";

export const axiosApi = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
});
