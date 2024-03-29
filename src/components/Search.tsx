import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../styles/colors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 15,
  backgroundColor: Colors.white,
  "&:hover": {
    backgroundColor: `1px solid ${Colors.light}`,
  },
  marginRight: theme.spacing(2),
  marginLeft: "1rem",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: Colors.light }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Поиск…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
