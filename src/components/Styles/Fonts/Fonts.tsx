import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    h1: {
      fontSize: '24px',
      paddingTop: '5rem',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
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
      marginBottom: '1rem',
    },
    body2: {
      textAlign: 'center',
      fontSize: '16px',
    },
  },
});
theme = responsiveFontSizes(theme);

export const Theme = theme;
