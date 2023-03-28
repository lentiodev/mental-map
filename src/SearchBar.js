import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchValue, setSearchValue }) => {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <TextField
      label="Search articles"
      value={searchValue}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />
  );
};

export default SearchBar;
