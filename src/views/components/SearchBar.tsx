import React, { useState } from "react";
import { TextField, Button, Grid2 } from "@mui/material";


type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };

  return (
    <React.Fragment>
      <Grid2 container spacing={2}>
        <Grid2 size={11}>
          <TextField
            label="Enter City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            size="small"
          />
        </Grid2>
        <Grid2 size={1}>
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Grid2>
      </Grid2>
    </React.Fragment>
  );
};

export default SearchBar;
