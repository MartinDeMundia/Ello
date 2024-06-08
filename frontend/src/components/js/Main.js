import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';
import SearchBar from './SearchBar';
import useBooksQuery from './useBooksQuery';
import SearchResults from './SearchResults';

function Main() {
  const [searchResults, setSearchResults] = useState([]);
  const { books, loading, error } = useBooksQuery();

  //handle search
  const handleSearch = (searchTerm) => {
    // filter the books based on the search term
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
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
