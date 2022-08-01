import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#853BE6',
    },
    secondary: {
      main: '#24103D',
    },
    error:{
      main: red[200],
    }
  },
});