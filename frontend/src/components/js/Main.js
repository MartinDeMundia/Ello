import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function Main() {
  const [searchResults, setSearchResults] = useState([]);

  // handle search
  const handleSearch = (searchTerm) => {
    setSearchResults([
      { id: 1, title: 'Search Result 1' },
      { id: 2, title: 'Search Result 2' },
      { id: 3, title: 'Search Result 3' },
    ]);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ello : Book assignment view
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2}>         
          <Grid item xs={12}>
            <SearchBar onSearch={handleSearch} />
          </Grid>       
          <Grid item xs={12}>
            <SearchResults results={searchResults} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;