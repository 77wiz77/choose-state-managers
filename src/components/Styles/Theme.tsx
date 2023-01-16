import { createTheme, responsiveFontSizes } from '@mui/material/styles';
//import { Fonts } from './Fonts/Fonts';

let theme = createTheme({
  typography: {
    h1: {
      marginTop: '10px',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    h2: {
      marginTop: '10px',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    h3: {
      marginTop: '10px',
      fontWeight: 'bold',
      // fontSize: '24px',
    },
    h4: {
      // fontSize: '24px',
      marginBottom: '50px',
    },
    body1: {
      fontSize: '24px',
    },
    body2: {
      fontSize: '20px',
    },
  },
});
theme = responsiveFontSizes(theme);

export const Theme = theme;
