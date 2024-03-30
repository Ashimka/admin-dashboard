import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Colors } from "../styles/colors";

import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

type productType = {
  id: number;
  name: string;
  price: number | null;
  quantity: number | null;
  desc: string;
};

const product: Array<productType> = [
  {
    id: 1,
    name: "qwer",
    price: 10,
    quantity: 10,
    desc: "Good super product",
  },
];
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Название продукта не заполнено"),
  price: Yup.number()
    .required("Цена продукта не заполнено")
    .positive("Цена должна быть больше 0"),
  quantity: Yup.number().required("Количество продукта не заполнено"),
  desc: Yup.string().required("Описание продукта не заполнено"),
});

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState<productType>({
    id: -1,
    name: "",
    price: null,
    quantity: null,
    desc: "",
  });
  const handleProductEdit = (product: productType) => {
    setOpen(true);
    setInitialValues(product);
  };
  const handleProductDelete = (id: number) => {
    console.log(id);
  };
  const handleAddProduct = () => {
    setOpen(true);
    setInitialValues({
      id: -1,
      name: "",
      price: null,
      quantity: null,
      desc: "",
    });
  };
  const handleSubmit = (values) => {
    console.log(values);
    setOpen(false);
  };
  return (
    <>
      <Box>
        <Typography sx={{ mb: 1 }} variant="h4">
          Products
        </Typography>
        <Button
          onClick={handleAddProduct}
          startIcon={<Add />}
          variant="contained"
          sx={{
            width: "25%",
          }}
        >
          Добавить
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Цена</TableCell>
                <TableCell>Количество</TableCell>
                <TableCell>Описание</TableCell>
                <TableCell>Опции</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.desc}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleProductEdit(item)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleProductDelete(item.id)}>
                      <Delete sx={{ color: Colors.danger }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} fullWidth maxWidth="lg">
          <DialogTitle>{"Добавить продукт"}</DialogTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ dirty, isValid, getFieldProps }) => (
              <Form>
                <DialogContent>
                  <Grid2 container spacing={2}>
                    <Grid2 xs={12}>
                      <Field
                        as={TextField}
                        name="name"
                        label="Название"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="name">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid2>
                    <Grid2 xs={12}>
                      <Field
                        as={TextField}
                        type="number"
                        name="price"
                        label="Цена"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="price">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid2>
                    <Grid2 xs={12}>
                      <Field
                        as={TextField}
                        name="quantity"
                        type="number"
                        label="Количество"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="quantity">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid2>
                    <Grid2 xs={12}>
                      <Field
                        as={TextField}
                        name="desc"
                        label="Описание"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="desc">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid2>
                  </Grid2>
                </DialogContent>
                <DialogActions>
                  {getFieldProps("id").value !== -1 ? (
                    <Button
                      disabled={!dirty || !isValid}
                      onClick={handleSubmit}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Сохранить
                    </Button>
                  ) : (
                    <Button
                      disabled={!dirty || !isValid}
                      onClick={handleSubmit}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Добавить
                    </Button>
                  )}
                  <Button onClick={() => setOpen(false)}>Отмена</Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </Dialog>
      </Box>
    </>
  );
};

export default Products;
