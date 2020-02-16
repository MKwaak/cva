import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const typeBody = "'Lora', arial, serif";
const typeTitle = "'Quicksand', georgia, sans-serif";

const theme = createMuiTheme({
  shadows: ['none'],
  palette: {
    primary: {
      main: '#F35026',
      dark: '#B63210',
    },
    secondary: {
      main: '#8AC7BB',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: typeBody,
    lineHeight: '1.4rem',
    h1: {
      fontFamily: typeTitle,
      fontSize: '5rem',
    },
    h2: {
      fontFamily: typeTitle,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: typeTitle,
    },
    h4: {
      fontFamily: typeTitle,
    },
    h5: {
      fontFamily: typeTitle,
    },
    body1: {
      fontSize: '1.5rem',
    },
    button: {
      fontFamily: typeTitle,
    },
    overline: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '3rem',
      },
    },
  },
});

export default responsiveFontSizes(theme);
