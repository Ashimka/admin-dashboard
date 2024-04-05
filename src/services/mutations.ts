import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "./api";
import { ILoginForm } from "../types/auth";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";

export const useRegister = () => {};

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ILoginForm) => loginUser(data),
    onMutate: () => {
      console.log("login");
    },

    onError: () => {
      console.log("error");
    },

    onSuccess: () => {
      toast.success("Вы авторизовались!");
      console.log("success");
    },

    onSettled: async (_, error) => {
      console.log("settled");

      if (error) {
        if (isAxiosError(error)) {
          if (error.response?.status === 400) {
            toast.warning(error.response?.data?.message);
          } else {
            toast.error(error?.message);
          }
        }
      } else {
        await queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
};
