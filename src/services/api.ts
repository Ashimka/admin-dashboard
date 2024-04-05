import axios from "axios";
import { ILoginForm, IRegisterForm } from "../types/auth";

const axiosApi = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
});

export const registerUser = async (data: IRegisterForm) => {
  await axiosApi.post("/auth/register", data);
};
export const loginUser = async (data: ILoginForm) => {
  await axiosApi.post("/auth/login", data);
};
