import React, { useState } from 'react';
import { TextField } from '@mui/material';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <TextField
      fullWidth
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}

export default SearchBar;