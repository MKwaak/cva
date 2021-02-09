import { NextPage } from 'next';
import { Grid, Typography, Link, List, ListItem, ListItemText } from '@material-ui/core';
import Page from '../templates/Page';
import SuperText from '../components/SuperText';

const contactsNetherlands = [
  { name: 'Marcel Kwakernaak', title: 'Founding director', mailAddress: 'm.kwakernaak@creatingvalue.co' },
  { name: 'Martijn Rademakers', title: 'Founding director', mailAddress: 'm.rademakers@creatingvalue.co' },
];

const contactsGlobal = [
  { name: 'Gautam Mahajan', title: 'President', mailAddress: 'gautam@mahajan.gmail' },
];

const Contact: NextPage = () => (
  <Page title="Contact" siteTitle="Contact" siteDescription="Contact Creating Value Alliance">
    <Grid container alignItems="stretch">
      <Grid item xs={12} md={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          Global
        </Typography>
        <List disablePadding>
          {contactsGlobal.map(({ name, mailAddress, title }) => (
            <ListItem key={mailAddress}>
              <ListItemText
                primary={(
                  <Link color="secondary" href={`mailto:${mailAddress}`} variant="body2">
                    {name}
                  </Link>
                )}
                secondary={(
                  <Typography variant="body2">{title}</Typography>
                )}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          Netherlands
        </Typography>
        <List disablePadding>
          {contactsNetherlands.map(({ name, mailAddress, title }) => (
            <ListItem key={mailAddress}>
              <ListItemText
                primary={(
                  <Link color="secondary" href={`mailto:${mailAddress}`} variant="body2">
                    {name}
                  </Link>
                )}
                secondary={(
                  <Typography variant="body2">{title}</Typography>
                )}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          Denmark
          <SuperText>(Coming soon)</SuperText>
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          Japan
          <SuperText>(Coming soon)</SuperText>
        </Typography>
      </Grid>
    </Grid>
  </Page>
);

export default Contact;
