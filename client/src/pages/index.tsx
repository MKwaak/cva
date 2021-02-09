import { useEffect } from 'react';
import { NextPage } from 'next';
import { Grid, Container, Box, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import EventList from '../components/EventList';
import CountryList from '../components/CountryList';
import Section from '../components/Section';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  buttonReadMore: {
    marginRight: '10px',
  },
  white: {
    color: 'white',
  },
  card: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
    '&:not cardHighlight': {
      backgroundColor: 'white',
    },
  },
  cardHighlight: {
    backgroundColor: '#8AC7BB',
  },
  cardAction: {
    marginTop: theme.spacing(3),
  },
  image: {
    width: '300px',
    '& img': {
      width: '100%',
    },
  },
  eventMainInfo: {
    marginBottom: theme.spacing(6),
  },
  horizontalAction: {
    marginTop: theme.spacing(6),
  },
  lastSectionHeading: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
  },
  titleMega: {
    fontFamily: theme.typography.h1.fontFamily,
  },
  [theme.breakpoints.down('sm')]: {
    titleMega: {
      fontSize: '2rem',
      lineHeight: '2.8rem',
    },
  },
  [theme.breakpoints.up('lg')]: {
    titleMega: {
      fontSize: '4rem',
      lineHeight: '4.8rem',
    },
  },
}));

interface IndexProps {
  title: string;
  description: string;
}

const Index: NextPage<IndexProps> = () => {
  const classes: ClassNameMap<string> = useStyles({});

  useEffect(() => {
    if (process.env.APP_VERSION) {
      // eslint-disable-next-line no-console
      console.info('Version: ', process.env.APP_VERSION);
    }
  }, []);

  return (
    <Layout
      siteTitle="Home | Creating Value Alliance"
      siteDescription="Together we stand as an international alliance, help grow the creation of value and spread the value creation mindset."
      homePage
    >
      <Jumbo />

      <Section first>
        <Container className={classes.container} maxWidth="lg">
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item xs={12} md={4} className={classes.eventMainInfo}>
              <Typography className={classes.white} variant="h3" component="h2" gutterBottom>
                Events
              </Typography>
              <Typography className={classes.white} variant="body1" gutterBottom>
                Connect with thinkers for <em>inspiration</em> and new <em>opportunities</em>.
              </Typography>
              {/* <Link href="/events" passHref>
                <Button color="primary" variant="contained" endIcon={<ArrowForwardRounded />}>
                  View all events
                </Button>
              </Link> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <EventList />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Grid container direction="row" justify="space-around">
          <Grid item xs={10} md={6}>
            <Typography variant="h3" component="h2" gutterBottom>Our philosophy</Typography>
            <Box maxWidth="57rem">
              <Typography gutterBottom>
                We all seek value for ourselves, as well as for our businesses and for our society.
                However, because we are so immersed in our day-to-day functional management,
                we often overlook opportunities for{' '}
                <strong>value creation</strong>
                , possibly to the detriment of
                our businesses and societal needs. Successful organizations and leaders create
                value for their eco-systems which include themselves, customers, employees, partners
                and other stakeholders.
              </Typography>
              <Typography>
                This happens mostly unconsciously, yet there are challenges in gauging
                and assessing ‘value’ and its impact. The Creating Value Alliance is an
                international movement to increase our understanding of the concept of value and,
                moreover, to find and promote ways of creating value consciously and more
                abundantly (and destroy less value). This, in turn, will allow us to operate
                more effectively, to build{' '}
                <strong>social value</strong>{' '}
                and to thrive and be ready for the challenges of a constantly changing and
                disruptive world.
              </Typography>
              <Box mt={3} justifyContent="flex-end" display="flex">
                <Typography component="span" className={`${classes.quoteAuthor}`}>
                  - Gautam Mahajan
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section backgroundColor="secondary">
        <Grid container direction="row" justify="space-around">
          <Grid item xs={10} md={8}>
            <Typography className={`${classes.titleMega} ${classes.white}`}>
              “Unless you make the unconscious conscious, it will direct your
              life, and you will call it fate.”
            </Typography>
            <Box mt={3} justifyContent="flex-end" display="flex">
              <Typography component="span" className={`${classes.quoteAuthor} ${classes.white}`}>
                - Carl Jung
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Container className={classes.container} fixed maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center" className={classes.lastSectionHeading}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" align="center" gutterBottom>
                Learn about value thinking
              </Typography>
            </Grid>
            <CountryList />
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};

export default Index;
