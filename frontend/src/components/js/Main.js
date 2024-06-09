import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Grid, IconButton, Dialog, DialogTitle, DialogContent, Button, CircularProgress } from '@mui/material';
import BookListIcon from '@mui/icons-material/Book';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBar from './SearchBar';
import useBooksQuery from './useBooksQuery';
import SearchResults from './SearchResults';

function Main() {
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { books, loading, error } = useBooksQuery();

  // Handle search
  const handleSearch = (searchTerm) => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  const handleAdd = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const handleRemove = (title) => {
    setCart((prevCart) => prevCart.filter((book) => book.title !== title));
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginRight: '10px' }}>
            <img src="/assets/logo.svg" alt="Logo" style={{ width: '40px', height: '40px' }} />
            <Typography variant="caption">Book Assignment View</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={handleCartOpen}>
            <BookListIcon />
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 , fontSize: '10px' }}>
                  Click to view added reading list
            </Typography>
            <Typography variant="" style={{ marginLeft: '5px' }}>{cart.length}</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <SearchBar onSearch={handleSearch} />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            {loading ? (
              <CircularProgress />
            ) : (
              <SearchResults results={searchResults} onAdd={handleAdd} onRemove={handleRemove} />
            )}
          </Grid>
        </Grid>
      </Container>
      <Dialog open={isCartOpen} onClose={handleCartClose}>
        <DialogTitle>
          Reading list
          <IconButton
            aria-label="close"
            onClick={handleCartClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {cart.length > 0 ? (
            cart.map((book) => (
              <Grid container key={book.id} spacing={2} alignItems="center" style={{ marginBottom: '10px' }}>
                <Grid item xs={2}>
                  <img src={book.coverPhotoURL} alt="Cover" style={{ width: '100%', height: 'auto' }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="subtitle1">{`Author: ${book.author}`}</Typography>
                  <Typography variant="body1">{`Reading Level: ${book.readingLevel}`}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button size="small" startIcon={<DeleteIcon />} onClick={() => handleRemove(book.title)}>Remove</Button>
                </Grid>
              </Grid>
            ))
          ) : (
            <Typography variant="body1">Hmmm...your reading list is empty!</Typography>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Main;
