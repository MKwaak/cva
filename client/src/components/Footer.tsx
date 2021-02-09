import { FC } from 'react';
import { Theme, Grid, Typography, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './Layout';
import Divider from './Divider';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  copyrightText: {
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: 'bold',
  },
  [theme.breakpoints.only('xs')]: {
    footer: {
      marginTop: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('sm')]: {
    footer: {
      marginTop: theme.spacing(15),
    },
  },
  footerShift: {
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  emblemContainer: {
    display: 'inline-block',
    margin: '6px 6px 0',
  },
  emblemSmall: {
    width: '1rem',
    height: '1rem',
    fill: theme.palette.primary.main,
  },
}));

interface FooterProps {
  shift: boolean;
}

const Footer: FC<FooterProps> = ({ shift }) => {
  const classes = useStyles({});
  return (
    <footer className={`${classes.footer} ${shift ? classes.footerShift : ''}`}>
      <Container className={classes.container} maxWidth="lg">
        <Divider gutterBottom />
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body2" gutterBottom>
              <Box component="small" alignItems="center" display="flex" className={classes.copyrightText}>
                <Box component="span" display="flex">© {new Date().getFullYear()} Creating Value</Box>
                <Box component="span" display="flex" mx={1} className={classes.emblemContainer}>
                  <svg className={classes.emblemSmall} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13.638 9.935a3.58 3.58 0 002.74 2.911 3.65 3.65 0 01.883.088l.038-.001.014.013a3.583 3.583 0 01-.848 7.061 3.581 3.581 0 01-3.578-3.433 3.58 3.58 0 00-2.941-2.953 3.58 3.58 0 00-2.76 2.674 3.581 3.581 0 11-3.85-3.435 3.581 3.581 0 003.057-2.903A3.58 3.58 0 003.25 7.14l-.008-.008a3.582 3.582 0 113.924-3.967v.004l.01.095a3.573 3.573 0 002.817 3.1 3.581 3.581 0 002.855-3.044 3.581 3.581 0 113.505 3.883c-.66.147-1.267.48-1.748.963a3.565 3.565 0 00-.967 1.769z" />
                  </svg>
                </Box>
                <Box component="span" display="flex">Alliance</Box>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
