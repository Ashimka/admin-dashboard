import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ILoginForm } from "../types/auth";
import { useLoginUser } from "../services/mutations";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  phone: Yup.string().required("Введите номер телефона"),
  password: Yup.string()
    .min(6, "Длина пароля не меньше 6 символов")
    .required("Введите пароль"),
});

const SigninForm = () => {
  const [open, setOpen] = React.useState(true);
  const [initialValues] = React.useState<ILoginForm>({
    phone: "",
    password: "",
  });

  const userMutation = useLoginUser();
  const navigate = useNavigate();

  const handleSubmit = async (loginValue: ILoginForm) => {
    try {
      await userMutation.mutateAsync(loginValue);

      setOpen(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} fullWidth maxWidth="xs">
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <DialogTitle>{"Вход"}</DialogTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid }) => (
            <Form>
              <DialogContent>
                <Grid2 container spacing={2}>
                  <Grid2 xs={12}>
                    <Field
                      as={TextField}
                      name="phone"
                      label="Введите номер телефона"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="phone">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid2>
                  <Grid2 xs={12}>
                    <Field
                      as={TextField}
                      type="password"
                      name="password"
                      label="Введите пароль"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="password">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid2>
                </Grid2>
              </DialogContent>
              <DialogActions>
                <Button
                  disabled={!dirty || !isValid}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Войти
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default SigninForm;
