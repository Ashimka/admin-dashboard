import { axiosApi } from "../app/axios";
import { ILoginForm } from "../types/auth";

export const fetchLogin = async (userValues: ILoginForm) => {
  return await axiosApi.post("/auth/login", {
    phone: userValues.phone,
    password: userValues.password,
  });
};
