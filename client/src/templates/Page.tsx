import { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    firstContent: {
      marginTop: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(8),
    },
  },
}));

interface PageProps {
  siteTitle: string;
  siteDescription: string;
  title?: string;
}

const Page: FC<PageProps> = ({ children, title, siteTitle, siteDescription }) => {
  const classes = useStyles({});

  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <Container component="article" className={classes.container} maxWidth="lg">
        <Grid container component="article" direction="column" justify="center" className={classes.firstContent}>
          {title && (
            <Grid item>
              <Typography variant="h2" component="h1" align="center" gutterBottom>
                {title}
              </Typography>
            </Grid>
          )}
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Page;
