import * as React from "react";
import { isAxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Colors } from "../styles/colors";
import { axiosApi } from "../app/axios";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const dataForm = new FormData(event.currentTarget);

      const { data } = await axiosApi.post("/auth/login", {
        phone: dataForm.get("phone"),
        password: dataForm.get("password"),
      });

      toast.success("Вы авторизовались!");

      console.log(data);

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        toast.warning(error.response?.data?.message);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Логин"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              background: Colors.secondary,
              color: Colors.graphite_black,
              "&:hover": {
                background: Colors.hover_bg,
              },
            }}
          >
            Войти
          </Button>
        </Box>
      </Box>
      <ToastContainer
        position="top-left"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        limit={1}
        theme="colored"
      />
    </Container>
  );
};

export default LoginPage;
