import React, { useState } from 'react';
import { TextField } from '@mui/material';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <TextField
      fullWidth
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default SearchBar;


// import React, { useState } from 'react';
// import { TextField } from '@mui/material';

// function SearchBar({ onSearch }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onSearch(searchTerm);
//     }
//   };

//   return (
//     <TextField
//       fullWidth
//       label="Search"
//       variant="outlined"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       onKeyPress={handleKeyPress}
//     />
//   );
// }
// export default SearchBar;
