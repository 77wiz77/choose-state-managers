import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    h1: {
      fontSize: '24px',
      marginTop: '1rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
    },
    h2: {
      fontSize: '22px',
      marginTop: '1rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
    },
    subtitle1: {
      fontSize: '20px',
      marginTop: '10px',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '18px',
      marginBottom: '3rem',
    },
    body2: {
      fontSize: '16px',
    },
  },
});
theme = responsiveFontSizes(theme);

export const Theme = theme;
