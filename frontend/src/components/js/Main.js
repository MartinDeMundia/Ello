import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, IconButton, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar';
import useBooksQuery from './useBooksQuery';
import SearchResults from './SearchResults';

function Main() {
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { books, loading, error } = useBooksQuery();

  //search
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ello : Book Assignment View
          </Typography>
          <IconButton color="inherit" onClick={handleCartOpen}>
            <ShoppingCartIcon />
            <Typography variant="body1">{cart.length}</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar onSearch={handleSearch} />
          </Grid>
          <Grid item xs={12}>
            <SearchResults results={searchResults} onAdd={handleAdd} onRemove={handleRemove} />
          </Grid>
        </Grid>
      </Container>
      <Dialog open={isCartOpen} onClose={handleCartClose}>
        <DialogTitle>Cart</DialogTitle>
        <DialogContent>
          {cart.length > 0 ? (
            cart.map((book) => (
              <div key={book.id} style={{ marginBottom: '10px' }}>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1">{`Author: ${book.author}`}</Typography>
                <Typography variant="body1">{`Reading Level: ${book.readingLevel}`}</Typography>
                <Button onClick={() => handleRemove(book.title)}>Remove from list</Button>
              </div>
            ))
          ) : (
            <Typography variant="body1">No books in cart</Typography>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Main;
