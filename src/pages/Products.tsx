import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Colors } from "../styles/colors";

type productType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  desc: string;
};
[];

const product: Array<productType> = [
  {
    id: 1,
    name: "qwer",
    price: 10,
    quantity: 10,
    desc: "as",
  },
];

const Products = () => {
  const handleProductEdit = (id: number) => {
    console.log(id);
  };
  const handleProductDelete = (id: number) => {
    console.log(id);
  };
  const handleAddProduct = () => {};
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
                <TableCell>Артикул</TableCell>
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
                  <TableCell>#456</TableCell>
                  <TableCell>{item.desc}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleProductEdit(item.id)}>
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
      </Box>
    </>
  );
};

export default Products;
