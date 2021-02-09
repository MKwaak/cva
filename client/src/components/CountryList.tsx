import { FC } from 'react';
import { makeStyles, Theme, Grid, Typography, Button } from '@material-ui/core';
import { ArrowForwardRounded } from '@material-ui/icons';
import Link from 'next/link';
import SuperText from './SuperText';

const useStyles = makeStyles((theme: Theme) => ({
  countryTitle: {
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    countryCard: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  [theme.breakpoints.up('md')]: {
    countryCard: {
      padding: theme.spacing(4),
    },
  },
}));

const CountryList: FC = () => {
  const classes = useStyles({});
  return (
    <Grid container alignItems="stretch">
      <Grid item xs={12} md={4} className={classes.countryCard}>
        <Typography variant="h4" component="h3" className={classes.countryTitle}>
          Netherlands
          <SuperText>(Coming soon)</SuperText>
        </Typography>
        {/* <Typography gutterBottom>
          Value Creation in <br />Software Development
        </Typography>
        <Link href="/nl" passHref>
          <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
            View blog
          </Button>
        </Link> */}
      </Grid>
      <Grid item xs={12} md={4} className={classes.countryCard}>
        <Typography variant="h4" component="h3" className={classes.countryTitle}>
          Denmark
          <SuperText>(Coming soon)</SuperText>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.countryCard}>
        <Typography variant="h4" component="h3" className={classes.countryTitle}>
          Japan
        </Typography>
        {/* <Typography gutterBottom>
            Value Creation in <br />...
          </Typography> */}
        <Link href="/jp" passHref>
          <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
            View blog
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default CountryList;
