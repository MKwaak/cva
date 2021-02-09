import { NextPage } from 'next';
import { FC } from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { BubbleChart as BubbleChartIcon } from '@material-ui/icons';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Layout from '../components/Layout';
import Section from '../components/Section';
import FormMembershipSubscribe from '../components/FormMembershipSubscribe';

const useStyles = makeStyles((theme: Theme) => ({
  firstSection: {
    paddingTop: theme.spacing(8),
  },
  secondBlockMembership: {
    marginTop: theme.spacing(3),
  },
  gutterMedium: {
    marginBottom: theme.spacing(2),
  },
}));

const listItemsMembersBenefits = [
  {
    key: 'b1',
    text: 'Being informed about the latest developments in the field',
  },
  {
    key: 'b2',
    text: 'Getting invited to both local and global conferences, seminars and other activities.',
  },
  {
    key: 'b3',
    text: 'Accessing the international Creating Value Alliance community with its potent network building and peer-to-peer exchanges',
  },
  {
    key: 'b4',
    text: 'Joining or starting value creation fora of your interest, for instance on entrepreneurship, hospitality, ICT, HRD, and Pricing.',
  },
  {
    key: 'b5',
    text: 'Being part of one of the most powerful business ideas and movements to evolve in recent times',
  },
  {
    key: 'b6',
    text: 'Volunteering and help growing the concept of Value Creation',
  },
  {
    key: 'b7',
    text: 'Being recognized as an endorser of value creation',
  },
  {
    key: 'b8',
    text: 'Being inspired and finding new ways of creating value',
  },
];

const listItemsInstitutionalBenefits = [
  {
    key: 'i1',
    text: 'Receiving preferential rates for attendance to the Global Conferences on Creating Value',
  },
  {
    key: 'i2',
    text: 'Being informed about developments and trends in the field of creating value',
  },
  {
    key: 'i3',
    text: 'Being consulted about themes, locations and speakers of events such as round tables and seminars.',
  },
  {
    key: 'i4',
    text: 'Being recognized as an organization that actively supports and endorses value creation',
  },
  {
    key: 'i5',
    text: 'Please contact us directly for more information about the possibilities and benefits of corporate / institutional membership.',
  },
];

const listItemsAims = [
  {
    key: 'a1',
    text:
      `Supporting the international Journal of Creating Value (Sage Publications) which
      creates a space for academics, practitioners and policy makers to develop and
      share and publish original ideas.`,
  },
  {
    key: 'a2',
    text:
      `Organizing Annual Global Conferences on Creating Value – a forum which assembles
      international thought leaders on value creation in business, consulting, academia
      and policy making.`,
  },
  {
    key: 'a3',
    text:
      `Building an international network of people supporting the development and
      dissemination of the value creation concept and mindset.`,
  },
  {
    key: 'a4',
    text:
      `Supporting initiatives of our members to lead or join activities such as workshops,
      seminars and webinars that further the aims of the Creating Value Alliance.`,
  },
  {
    key: 'a5',
    text:
      `Introducing, collating and disseminating ideas and practices of value creation in
      all areas of society the world around. We welcome fresh and thought-provoking
      approaches.`,
  },
];

type AboutListItem = { key: string; text: string }

interface AboutListInterface {
  listItems: AboutListItem[];
}

const AboutList: FC<AboutListInterface> = ({ listItems }) => (
  <List style={{ marginBottom: '1rem' }} dense>
    {listItems.map(({ key, text }) => (
      <ListItem key={key} alignItems="flex-start" disableGutters>
        <ListItemIcon>
          <BubbleChartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">
            {text}
          </Typography>
        </ListItemText>
      </ListItem>
    ))}
  </List>
);

const JoinUs: NextPage = () => {
  const classes: ClassNameMap<string> = useStyles({});
  return (
    <>
      <Layout
        siteTitle="About Creating Value Alliance"
        siteDescription="Join the Creating Value Alliance to
          realize purposeful, sustainable and prosperous societies, companies, institutions,
          NGO’s, and think-tanks."
      >
        <Section noPadding>
          <Grid container justify="space-around" className={classes.firstSection}>
            <Grid item xs={10} md={8}>
              <Typography variant="h3" component="h1" gutterBottom>Creating Value Alliance</Typography>
              <Typography gutterBottom>
                The Creating Value Alliance is an international association that unites business
                leaders, policy makers, advisors and academics. Together we further value creation
                by governments, institutions, businesses, and individuals through sharing thoughts,
                knowledge and good practices on value creation, develop capabilities and to educate,
                advice and act accordingly. Together we disseminate a value creation mindset.
                The Value Creation Alliance has active members in an increasing number of
                countries including India, Japan, United States, United Kingdom, France, Denmark,
                Italy, Poland, Germany, Australia, Netherlands among others
              </Typography>
            </Grid>
            <Grid item xs={10} md={8}>
              <Typography variant="h4" component="h2" gutterBottom>Individuals membership</Typography>
              <Typography>
                Membership for individuals is free. Become a member of the
              </Typography>
              <Typography className={classes.gutterMedium}>
                Creating Value Alliance and benefit from:
              </Typography>
              <AboutList listItems={listItemsMembersBenefits} />
            </Grid>
            <Grid item xs={10} md={8} className={classes.secondBlockMembership}>
              <Typography variant="h4" component="h2" gutterBottom>Institutional membership</Typography>
              <Typography className={classes.gutterMedium}>
                Corporate or institutional memberships are also possible. Benefits offered include:
              </Typography>
              <AboutList listItems={listItemsInstitutionalBenefits} />
            </Grid>
            <Grid item xs={10} md={8}>
              <Typography variant="h3" component="h2" gutterBottom>Why</Typography>
              <Typography gutterBottom>
                A value creation mindset drives thought processes and actions that are needed to
                realize purposeful, sustainable and prosperous societies, companies, institutions,
                NGO’s, and think-tanks. It provides a wider and more meaningful view of complex
                problems to solve than the yet important but fragmented and narrow expert views.
                For companies this is a key to increased profitability – but a profitability with
                awareness and understanding of the underpinning long-term factors. For
                non-commercial organizations it is a key to higher societal impact and appreciation.
              </Typography>
            </Grid>
            <Grid item xs={10} md={8}>
              <Typography variant="h3" component="h2" gutterBottom>How</Typography>
              <Typography className={classes.gutterMedium}>
                The Creating Value Alliance seeks to achieve its aims through:
              </Typography>
              <AboutList listItems={listItemsAims} />
            </Grid>
            <Grid item xs={10} md={8}>
              <FormMembershipSubscribe />
            </Grid>
          </Grid>
        </Section>
      </Layout>
    </>
  );
};

export default JoinUs;
