import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Dark green
    },
    secondary: {
      main: '#FF8F00', // Orange
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
    },
  },
});

export default theme;