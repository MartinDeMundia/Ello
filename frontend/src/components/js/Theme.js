import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
      h6: {
        color: '#335C6E', // steel Blue
      },
      subtitle1: {
        color: '#335C6E', // steel Blue
      },
      body1: {
        color: '#F76434', // orange red
      },
  },
  palette: {
    primary: {
      main: '#5ACCCC', // turquoise
    },
    secondary: {
      main: '#F76434', // orange red
    },
  },
  components: {
    MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#5ACCCC', // turquoise
            color: '#ffffff', // white
          },
        },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#28B8B8', // turquoise dark 2
        },
      },
    },
  },
});
export default theme;

