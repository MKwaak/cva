import { FC, useEffect, useState } from 'react';
import { Container, Grid, Typography, Theme, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { ArrowForwardRounded } from '@material-ui/icons';
import Link from 'next/link';

const animationTimout = 500;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  intro: {
    width: '100%',
    maxWidth: '680px',
    color: 'rgba(0,0,0,.8)',
    '& em': {
      fontStyle: 'normal',
    },
  },
  jumboHidden: {
    opacity: 0,
    transform: 'matrix(1,0,0,1,0,20)',
  },
  jumboTransitionEnter: {
    opacity: 1,
    transform: 'matrix(1,0,0,1,0,0)',
    transition: `all ${animationTimout}ms ease-in`,
  },
  [theme.breakpoints.up('md')]: {
    jumbo: {
      paddingTop: '2%',
      paddingBottom: '2%',
    },
  },
}));

const intro = (
  <>
    Together we stand as an international alliance, help grow the creation of value and spread the value creation{' '}
    mindset.
  </>
);

const Jumbo: FC = () => {
  const classes = useStyles({});
  const [inProp, setInProp] = useState(false);
  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    setInProp(true);
    const timeout = window.setTimeout(() => {
      setHidden(false);
    }, animationTimout);

    return (): void => window.clearInterval(timeout);
  }, []);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="row" justify="space-around">
        <CSSTransition
          in={inProp}
          timeout={animationTimout}
          appear
          classNames={{
            enter: classes.jumboTransitionEnter,
          }}
        >
          <Grid item className={`${classes.jumbo} ${isHidden ? classes.jumboHidden : null}`}>
            <Typography variant="h1" className={classes.title}>
              Together. Grow. Purpose.
            </Typography>
            <Typography className={classes.intro} gutterBottom>
              {intro}
            </Typography>
            <Link href="/events/third-global-conference-on-creating-value" passHref>
              <Button color="primary" variant="contained" endIcon={<ArrowForwardRounded />} aria-label="Go to the upcoming event page">
                View Upcoming Event
              </Button>
            </Link>
          </Grid>
        </CSSTransition>
      </Grid>
    </Container>
  );
};

export default Jumbo;
