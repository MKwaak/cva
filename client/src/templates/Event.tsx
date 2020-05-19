import { FC } from 'react';
import {
  Container,
  Grid,
  Theme,
  Typography,
  Box,
  Button,
  Hidden,
  Link,
} from '@material-ui/core';
import { LinkedIn as LinkedInIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { PostEvent } from '../shared.types';
import Layout from '../components/Layout';
import Section from '../components/Section';
import ProfileImage from '../components/ProfileImage';
import Divider from '../components/Divider';
import Speaker from '../components/Speaker';
import Truncate from '../components/Truncate';
import InfoBlock from '../components/InfoBlock';
import FormEventSubscribe from '../components/FormEventSubscribe';
import TimeTable from '../components/TimeTable';

import WeezeEvent from '../third-party/WeezeEvent';

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    [theme.breakpoints.down('sm')]: {
      body: {
        backgroundImage: "url('/images/events/EDP/background_louvre_sm.jpg')",
      },
    },
    [theme.breakpoints.only('md')]: {
      body: {
        backgroundImage: "url('/images/events/EDP/background_louvre_lg.jpg')",
      },
    },
    [theme.breakpoints.up('lg')]: {
      body: {
        backgroundImage: "url('/images/events/EDP/background_louvre_xxl.jpg')",
      },
    },
    footer: {
      marginTop: [['0'], '!important'],
      backgroundColor: theme.palette.secondary.dark,
      '& small': {
        color: theme.palette.common.white,
      },
      '& .divider': {
        borderColor: theme.palette.common.white,
      },
    },
  },
  logoEDP: {
    width: '320px',
    maxWidth: '100%',
    height: '140px',
    objectFit: 'cover',
  },
  partnerBar: {
    padding: `${theme.spacing(6)}px 0`,
    backgroundColor: theme.palette.common.white,
  },
  logoPartner: {
    height: '3.5rem',
  },
  conferenceBg: {
    backgroundImage: "url('/images/events/EDP/background_conference_notes.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
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
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
  mediumGutter: {
    marginBottom: theme.spacing(4),
  },
  intergrationBlock: {
    padding: theme.spacing(8),
  },
  eventMeta: {
    paddingTop: theme.spacing(2),
  },
  eventMetaBorderLeft: {
    borderLeft: `1px solid ${theme.palette.common.white}`,
    paddingLeft: theme.spacing(2),
  },
  white: {
    color: theme.palette.common.white,
  },
  iconJumbo: {
    fontSize: '3.5rem',
    color: theme.palette.grey[500],
  },
  speaker: {
    padding: theme.spacing(3),
  },
  testimonial: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    height: '100%',
    color: 'white',
  },
  testimonialTitle: {
    marginBottom: theme.spacing(3),
    height: '4rem',
    textAlign: 'center',
    verticalAlign: 'center',
  },
  testimonialBody: {
    fontStyle: 'italic',
  },
  lineUpBlock: {
    '&:nth-child(even) > div': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:nth-child(odd) > div': {
      backgroundColor: '#5BBF8C',
    },
  },
  [theme.breakpoints.down('md')]: {
    firstContent: {
      marginTop: theme.spacing(8),
      paddingBottom: theme.spacing(10),
    },
    CTAContainer: {
      marginTop: theme.spacing(6),
      justifyContent: 'center',
    },
    testimonialContainer: {
      marginBottom: theme.spacing(4),
    },
    partnerBar: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
    },
    logoPartner: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    footerGutter: {
      marginBottom: theme.spacing(4),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(8),
      paddingBottom: theme.spacing(30),
    },
    CTAContainer: {
      justifyContent: 'flex-end',
    },
    partnerBar: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
  },
}));

const timeTables = {
  eam: [
    {
      itemTitle: '10h - 10h55 (CET) Check-in, Keynotes and Q&A',
      listItems: [
        '10\' Participants check in',
        '05\' Opening by Gautam Mahajan 25\' Keynote Speaker',
        '15\' Q&A moderated by Martin Calan',
      ],
      key: 'eam0',
    },
    {
      itemTitle: '11h - 12h (CET) Parallel Creative Sessions',
      listItems: [
        '05\' Participants check in',
        '10\' Panelists introduce their wicked problem',
        '35\' Online moderated sharing and discussing ideas 10\' Panelists wrap up',
      ],
      key: 'eam1',
    },
    {
      itemTitle: '12h05 - 13h (CET) Parallel Paper Sessions',
      listItems: [
        '05\' Participants check in',
        '05\' Intro by Karina Burgdorff Jensen',
        '20\' Parallel paper presentations + discussion, round 1 02',
        '02\' Time to switch \'online room\'',
        '20\' Parallel paper presentations + discussion, round 2',
        '03\' Wrap-up by Karina Burgdorff Jensen',
      ],
      key: 'eam2',
    },
  ],
  ncsa: [
    {
      itemTitle: '11h30 - 12h25 (EDT) Check-in, Keynotes and Q&A',
      listItems: [
        '10\' Participants check in',
        '05\' Opening by Gautam Mahajan',
        '25\' Keynote Speaker',
        '15\' Q&A moderated by Martijn Rademakers',
      ],
      key: 'ncsa0',
    },
    {
      itemTitle: '12h30 - 13h30 (EDT) Parallel Creative Sessions',
      listItems: [
        '05\' Participants check in',
        '10\' Panelists introduce their wicked problem',
        '35\' Online moderated sharing and discussing ideas',
        '10\' Panelists wrap up',
      ],
      key: 'ncsa1',
    },
    {
      itemTitle: '13h35 - 14h30 (EDT) Parallel Paper Sessions',
      listItems: [
        '05\' Participants check in',
        '05\' Intro by Karina Burgdorff Jensen',
        '20\' Parallel paper presentations + discussion, round 1',
        '02\' Time to switch \'online room\'',
        '20\' Parallel paper presentations + discussion, round 2',
        '03\' Wrap-up by Karina Burgdorff Jensen',
      ],
      key: 'ncsa2',
    },
  ],
  aao: [
    {
      itemTitle: '14h00 - 14h55 (JST) Check-in, Keynotes and Q&A',
      listItems: [
        '10\' Participants check in',
        '05\' Opening by Gautam Mahajan',
        '25\' Keynote Speaker',
        '15\' Q&A moderated by Gautam Mahajan',
      ],
      key: 'aao0',
    },
    {
      itemTitle: '15h - 16h (JST) Parallel Creative Sessions',
      listItems: [
        '05\' Participants check in',
        '10\' Panelists introduce their wicked problem',
        '35\' Online moderated sharing and discussing ideas',
        '10\' Panelists wrap up',
      ],
      key: 'aao1',
    },
    {
      itemTitle: '16h05 - 17h (JST) Parallel Paper Sessions',
      listItems: [
        '05\' Participants check in',
        '05\' Intro by Karina Burgdorff Jensen',
        '20\' Parallel paper presentations + discussion, round 1',
        '02\' Time to switch \'online room\'',
        '20\' Parallel paper presentations + discussion, round 2',
        '03\' Wrap-up by Karina Burgdorff Jensen',
      ],
      key: 'aao2',
    },
  ],
};

interface EventTemplateProps {
  data: PostEvent;
}

const Event: FC<EventTemplateProps> = ({ data }) => {
  const classes: ClassNameMap<string> = useStyles({});

  const { title, location } = data;

  return (
    <Layout siteTitle={title} invertHeader>
      <Container component="article" className={classes.container} maxWidth={false} disableGutters>

        <Grid container direction="row" justify="space-around" className={classes.firstContent}>
          <Grid item xs={10} md={8}>
            <Box className={classes.logoEDP}>
              <img src="/images/events/EDP/logo_EDP.svg" alt="Logo Ecole des ponts business school" />
            </Box>
            <Box maxWidth="800px">
              <Typography component="h1" className={`${classes.titleMega} ${classes.white}`} gutterBottom>
                {title}
              </Typography>
            </Box>
            <Divider color="white" gutterBottom />
            <Grid container>
              <Grid item xs={6} md={4}>
                <Typography display="block" className={classes.white}>
                  <strong>October 20 and 21st</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} md={5} className={classes.eventMetaBorderLeft}>
                <Typography className={classes.white}>
                  {location}<br />
                  EPBS, 6 Place Du Colonel<br />
                  Bourgoin, 75012 Paris
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className={classes.CTAContainer} display="flex">
                  <Link href="#anchor-integrations">
                    <Button variant="contained" color="primary">Get Tickets</Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row">
          <Grid item xs={12} md={6}>
            <InfoBlock variant="secondary">
              <Typography className={`${classes.titleMega} ${classes.white}`} component="h2" gutterBottom>
                About the Online<br />Conference
              </Typography>
              <Box mb={4}>
                <Divider color="white" />
                <Grid container>
                  <Grid item xs={6} md={4} className={classes.eventMeta}>
                    <Typography variant="body2" className={classes.white}>
                      <strong>June 2nd <br />and 3rd</strong>
                    </Typography>
                  </Grid>
                  <Hidden mdDown>
                    <Grid item xs={6} md={4} className={`${classes.eventMeta} ${classes.eventMetaBorderLeft}`}>
                      <Typography variant="body2" className={classes.white}>
                        Creating Value Conference 2020
                      </Typography>
                    </Grid>
                  </Hidden>
                </Grid>
              </Box>
              <Typography className={classes.white} gutterBottom>
                Instead of taking place in person, an adapted version of the conference will take
                place online on <strong>June 2-3</strong>, 2020, as a prelude to the physical
                conference that will be held later in the year in Paris in October 2020.
              </Typography>
              <Typography className={classes.white} gutterBottom>
                By using a <strong>digital format</strong> for the postponed event, participants
                can join into a range of live keynotes, panel, paper and expert discussions and
                other conference tracks. The condensed, facilitated and video recorded activities
                will enable participants to either synchronously or asynchronously share and expand
                their knowledge, get inspired and immerse in <strong>virtual networking</strong>{' '}
                with other attendees from across the globe.
              </Typography>
              <Box display="flex" justifyContent="flex-end" flexDirection="row" alignItems="center">
                <Box pr={2}>
                  <Link underline="always" target="_blank" href="/downloads/Third_Global_Conference_on_Creating_Value.pdf">
                    <Button color="primary">Download Brochure</Button>
                  </Link>
                </Box>
                <Box>
                  <Link href="#anchor-integrations">
                    <Button variant="contained" color="primary">Register for free</Button>
                  </Link>
                </Box>
              </Box>
            </InfoBlock>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoBlock variant="primary">
              <Typography className={`${classes.titleMega} ${classes.white}`} component="h2" gutterBottom>
                About the <br />Conference
              </Typography>
              <Box mb={4}>
                <Divider color="white" />
                <Grid container>
                  <Grid item xs={6} md={4} className={classes.eventMeta}>
                    <Typography variant="body2" className={classes.white}>
                      <strong>October <br />20 and 21st</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4} className={`${classes.eventMeta} ${classes.eventMetaBorderLeft}`}>
                    <Typography variant="body2" className={classes.white}>
                      09:00 am<br />
                      (C.E.T.)
                    </Typography>
                  </Grid>
                  <Hidden mdDown>
                    <Grid item xs={6} md={4} className={`${classes.eventMeta} ${classes.eventMetaBorderLeft}`}>
                      <Typography variant="body2" className={classes.white}>
                        Creating Value Conference 2020
                      </Typography>
                    </Grid>
                  </Hidden>
                </Grid>
              </Box>
              <Typography className={classes.white} gutterBottom>
                Ecole des Ponts Business School and the Creating Value Alliance are proud to
                invite you to the Third Global Conference on Creating Value that will take place
                in Paris on October 20th and 21st, 2020. Building on the foundations of the previous
                global editions in Leicester and New York, the Global Conference on Creating Value
                in Paris aims to increase our understanding of what it means to create value in a
                constantly changing environment.
              </Typography>
            </InfoBlock>
          </Grid>
        </Grid>

        <Grid container className={classes.partnerBar}>
          <Grid item>
            <img className={classes.logoPartner} src="/images/events/EDP/logo_CVF.jpg" alt="Logo CVF" />
          </Grid>
          <Grid item>
            <img className={classes.logoPartner} src="/images/generic/logo_cva_old.png" alt="Logo cva old" />
          </Grid>
          <Grid item>
            <img className={classes.logoPartner} src="/images/events/EDP/logo_EDP.jpg" alt="Logo Ecole des ponts business school" />
          </Grid>
          <Grid item>
            <img className={classes.logoPartner} src="/images/events/EDP/logo_journal-cva.jpg" alt="Logo Journal of Creating Value" />
          </Grid>
        </Grid>

        <Grid container direction="row">
          <Grid item xs={12} md={6}>
            <InfoBlock>
              <Typography className={classes.titleMega} component="h2" color="primary" gutterBottom>
                Call for papers
              </Typography>
              <Typography>
                <strong>New deadline April 23rd</strong>
              </Typography>
              <Typography>
                The organizing committee of the Third Global Conference, June 2020, on Creating
                Value is inviting academics and professionals to share their latest insights and/or
                research findings on the topic of Creating Value through a paper, poster or video
                presentation, or any other creative way to share the knowledge that is suitable for
                a conference setting.
              </Typography>
            </InfoBlock>
          </Grid>
          <Grid className={classes.conferenceBg} item xs={12} md={6}>
            <Grid container justify="center" alignItems="center">
              <img src="/images/events/EDP/logo_third_conference.jpg" alt="" style={{ maxWidth: '100%' }} />
            </Grid>
          </Grid>
        </Grid>

        <Section backgroundColor="secondary">
          <Grid container direction="row" justify="space-around">
            <Grid item xs={10} md={8}>
              <Typography component="h2" align="center" className={`${classes.mediumGutter} ${classes.titleMega} ${classes.white}`}>
                Line-up
              </Typography>
              <Typography className={classes.white} align="center" gutterBottom>
                The online conference will comprise three different time zones situated around the
                world. <br />For each zone, we have prepared an exciting line-up of events:
              </Typography>
            </Grid>
          </Grid>

          <Container className={classes.container} fixed maxWidth="lg">
            <Grid container alignItems="stretch">
              <Grid item xs={12} md={4} justify="center" alignItems="center">
                <Typography component="h3" variant="h4" align="center" className={`${classes.white} ${classes.smallGutter}`}>Europe, Africa, <br /> Middle-East</Typography>
                <Typography color="primary" align="center" gutterBottom>(CET) 10h - 13h <br /> June 2nd</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography component="h3" variant="h4" align="center" className={`${classes.white} ${classes.smallGutter}`}>North & South <br /> America</Typography>
                <Typography color="primary" align="center" gutterBottom>(EDT) 11h30 - 14h30 <br /> June 2nd</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography component="h3" variant="h4" align="center" className={`${classes.white} ${classes.smallGutter}`}>Asia, Australia <br /> & Oceania</Typography>
                <Typography color="primary" align="center" gutterBottom>(JST) 14h - 17h <br /> June 3rd</Typography>
              </Grid>
              <Grid item xs={12} className={classes.lineUpBlock}>
                <Box p={4} mb={2}>
                  <Typography align="center" component="p" variant="h5" className={`${classes.white} ${classes.smallGutter}`}>Keynote Speaker</Typography>
                  <Typography align="center" className={classes.white} variant="body2">
                    This section is for our inspiring, thought-provoking, and <br />
                    sometimes un-settling keynotes to challenge our basic beliefs.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.lineUpBlock}>
                <Box p={4} mb={2}>
                  <Typography align="center" component="p" variant="h5" className={`${classes.white} ${classes.smallGutter}`}>Creative Sessions</Typography>
                  <Typography align="center" className={classes.white} variant="body2">
                    Interactive creative sessions will harness the power of collective
                    intelligence<br /> to explore some of the crucial problems that we are currently
                    facing.<br /> A great opportunity for networking!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.lineUpBlock}>
                <Box p={4}>
                  <Typography align="center" component="p" variant="h5" className={`${classes.white} ${classes.smallGutter}`}>Paper Sessions</Typography>
                  <Typography align="center" className={classes.white} variant="body2">
                    High value-added paper sessions for researchers to get feedback on<br />
                    their work and exhibit their ideas in the physical conference in October.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Section backgroundColor="white">
          <Container className={classes.container} fixed maxWidth="lg">
            <Grid container direction="row" justify="space-around">
              <Grid item xs={12} md={4}>
                <Typography component="h2" variant="h2" align="center" className={classes.smallGutter}>Europe, Africa, Middle-East</Typography>
                <Typography color="secondary" align="center" gutterBottom>(CET) 10h - 13h <br /> June 2nd</Typography>
                <TimeTable data={timeTables.eam} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography component="h2" variant="h2" align="center" className={classes.smallGutter}>North & South America</Typography>
                <Typography color="secondary" align="center" gutterBottom>(EDT) 11h30 - 14h30 <br /> June 2nd</Typography>
                <TimeTable data={timeTables.ncsa} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography component="h2" variant="h2" align="center" className={classes.smallGutter}>Asia, Australia & Oceania</Typography>
                <Typography color="secondary" align="center" gutterBottom>(JST) 14h - 17h <br /> June 3rd</Typography>
                <TimeTable data={timeTables.aao} />
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Section backgroundColor="secondary">
          <Grid container direction="row" justify="space-around">
            <Grid item xs={10} md={8}>
              <Typography component="h2" className={`${classes.smallGutter} ${classes.titleMega} ${classes.white}`}>
                Speakers
              </Typography>
              <Typography className={classes.white} gutterBottom>
                Proud to bring inspirational speakers from across the globe
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="space-around">
            <Grid item xs={12} md={4} className={classes.speaker}>
              <Speaker
                imageUrl="/images/events/EDP/speaker_Riel_Miller.jpg"
                name="Riel Miller"
                content={(
                  <Box p={3}>
                    <Typography component="h3" variant="h5" className={classes.white} gutterBottom>
                      Head of Futures Literacy at UNESCO
                    </Typography>
                    <Typography variant="body2" className={classes.white}>
                      <Truncate
                        text="
                          For thirty years Riel has been co-creating innovation, leadership and transformation
                          in both the public and private sectors around the world. He is one of the world’s
                          leading strategic foresight designers and practitioners. Currently Riel holds the
                          position of Head of Foresight at UNESCO in Paris.
                        "
                        position={500}
                      />
                    </Typography>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.speaker}>
              <Speaker
                imageUrl="/images/events/EDP/speaker_Kokubu_Katsuhiko.jpg"
                name="Kokubu Katsuhiko"
                content={(
                  <Box p={3}>
                    <Typography component="h3" variant="h5" className={classes.white} gutterBottom>
                      Associate Professor School of Business Administration at Kobe University
                    </Typography>
                    <Typography variant="body2" className={classes.white}>
                      <Truncate
                        text="
                          Prof/Dr. Katsuhiko Kokobu is currently working as Professor,
                          Graduate School of Business Administration, Kobe University,
                          Japan. He has succesfully completed his Administrative
                          responsibilities as Professor. His research has included
                          Social and Environmental Accounting, Financial Analysis and
                          Management.
                        "
                        position={500}
                      />
                    </Typography>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.speaker}>
              <Speaker
                imageUrl="/images/events/EDP/speaker_Diane_Magers.png"
                name="Diane Magers"
                content={(
                  <Box p={3}>
                    <Typography component="h3" variant="h5" className={classes.white} gutterBottom>
                      Founder and Chief Experience Officer at Experience Catalysts
                    </Typography>
                    <Typography variant="body2" className={classes.white}>
                      <Truncate
                        text="
                          With over 25 years of Customer Experience leadership with brands like AT&mp;T
                          and Sysco, Diane has led transformations to embed customer and employee
                          engagement with definable business benefit. She is currently interim CEO for the
                          Customer Experience Professionals Association, and founder of Customer
                          Experience Catalysts, a customer experience excellence consultancy. She
                          holds an MS in Psychology and an MBA. She is a Certified Customer Experience
                          Professional (CCXP), a CXPA CX Expert, and NPS, Voice of Customer and Customer
                          Experience Management certified.
                        "
                        position={500}
                      />
                    </Typography>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.speaker}>
              <Speaker
                imageUrl="/images/events/EDP/speaker_Hermann_Simon.jpg"
                name="Hermann Simon"
                content={(
                  <Box p={3}>
                    <Typography component="h3" variant="h5" className={classes.white} gutterBottom>
                      Founder and Honorary Chairman, Simon-Kucher &amp; Partners
                    </Typography>
                    <Typography variant="body2" className={classes.white}>
                      <Truncate
                        text="
                          Hermann Simon is the Founder and Honorary Chairman of Simon-Kucher &amp; Partners.
                          He is an expert in strategy, marketing and pricing. He is the only German in the
                          “Thinkers50 Hall of Fame” of the most important management thinkers in the world.
                          The magazine Cicero ranks him in the top 100 of the 500 most important intellectuals.
                        "
                        position={500}
                      />
                    </Typography>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.speaker}>
              <Speaker
                imageUrl="/images/events/EDP/speaker_Stephen_Vargo.jpeg"
                name="Stephen Vargo"
                content={(
                  <Box p={3}>
                    <Typography component="h3" variant="h5" className={classes.white} gutterBottom>
                      Shidler Distinguished Professor at University of Hawaii
                    </Typography>
                    <Typography variant="body2" className={classes.white}>
                      <Truncate
                        text="
                          Stephen L. Vargo is a Shidler Distinguished Professor and Professor of Marketing
                          at the University of Hawai’i at Manoa. He currently serves as editor-in-chief of
                          the AMS Review. Professor Vargo has been awarded the Shelby D. Hunt/ Harold H.
                          Maynard Award (twice) and the AMA/Sheth Foundation Award for his contributions
                          marketing theory, among other awards.
                        "
                        position={500}
                      />
                    </Typography>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.speaker}>
              <Speaker
                imageUrl="/images/events/EDP/speaker_Wayne_Visser.jpeg"
                name="Wayne Visser"
                content={(
                  <Box p={3}>
                    <Typography component="h3" variant="h5" className={classes.white} gutterBottom>
                      Professor of Integrated Value and Chair in Sustainable transformation
                      at Antwerp Management School
                    </Typography>
                    <Typography variant="body2" className={classes.white}>
                      <Truncate
                        text="
                          Prof. Dr Wayne Visser is a globally recognized ‘pracademic’, listed as one
                          of the world’s Top 10 most influential faculty thinkers on issues of responsible
                          business in social media, a top 100 influencer on CSR and sustainable business,
                          a top 100 thought-leader in trustworthy business and a top 100 sustainability leader.
                        "
                        position={500}
                      />
                    </Typography>
                  </Box>
                )}
              />
            </Grid>
          </Grid>
        </Section>

        <Section backgroundColor="white">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Typography component="h2" className={classes.titleMega} gutterBottom>
                Testimonials
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="space-around" alignItems="stretch">
            <Grid item xs={12} md={3} className={classes.testimonialContainer}>
              <Box className={classes.testimonial}>
                <Typography component="h3" variant="h5" className={classes.testimonialTitle}>
                  Amnon Danzig,<br />Business Developer
                </Typography>
                <Typography variant="body2" className={classes.testimonialBody}>
                  &ldquo;For me, the entire conference shed light on other directions with the way{' '}
                  we manage organizations and the way we have to teach the younger generation all{' '}
                  about managing. I feel that my book might give a few practical insights on how{' '}
                  to do it by combining non-related domains.&rdquo;
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} className={classes.testimonialContainer}>
              <Box className={classes.testimonial}>
                <Typography component="h3" variant="h5" className={classes.testimonialTitle}>
                  Monica, Attendee
                </Typography>
                <Typography variant="body2" className={classes.testimonialBody}>
                  &ldquo;I truly enjoyed the conference in NYC. It was a great learning experience{' '}
                  and wonderful opportunity to exchanged ideas with colleagues from different{' '}
                  industries and background. Alice, Alberto and I are planning to write an article to{' '}
                  expand our presentation.&rdquo;
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} className={classes.testimonialContainer}>
              <Box className={classes.testimonial}>
                <Typography component="h3" variant="h5" className={classes.testimonialTitle}>
                  Corey Whipple, Attendee
                </Typography>
                <Typography variant="body2" className={classes.testimonialBody}>
                  &ldquo;I enjoyed the conference. Great insight on value creation, diverse attendees,{' '}
                  and good combination of academia and business professionals. Nice dinner, scenery,{' '}
                  and location for attendees. New perspectives presented have been included in the{' '}
                  approach to my own developments in business and MSc research.&rdquo;
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} className={classes.testimonialContainer}>
              <Box className={classes.testimonial}>
                <Typography component="h3" variant="h5" className={classes.testimonialTitle}>
                  Michael, Attendee
                </Typography>
                <Typography variant="body2" className={classes.testimonialBody}>
                  &ldquo;On behalf of Craig, Esperanza, Alan, Catherine and myself can we thank you{' '}
                  for a great conference. We have all learned so much and met some amazing people,{' '}
                  including having the unique opportunity to meet Dr Kotler.&rdquo;
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Grid container direction="row" justify="space-around">
            <Grid item xs={10} md={8}>
              <Typography className={`${classes.titleMega} ${classes.white}`}>
                “A cynic is a man who knows the price of everything and the value of nothing.”
              </Typography>
              <Box mt={3} justifyContent="flex-end" display="flex">
                <Typography component="span" className={`${classes.quoteAuthor} ${classes.white}`}>
                  — Oscar Wilde
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Section>

        <div id="anchor-integrations" />

        <Section backgroundColor="white" noPadding>
          <Grid container direction="row">
            <Grid xs={12} lg={6} item className={classes.intergrationBlock}>
              <Typography variant="h4" gutterBottom>
                Register for free for the Online Conference
              </Typography>
              <FormEventSubscribe />
            </Grid>
            <Grid xs={12} lg={6} item className={classes.intergrationBlock}>
              <Typography variant="h4" gutterBottom>
                Tickets for the Conference
              </Typography>
              <WeezeEvent />
            </Grid>
          </Grid>
        </Section>

        <Section backgroundColor="white">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid xs={10} md="auto" item>
              <Typography component="h2" className={classes.titleMega} gutterBottom>
                Conference Directors
              </Typography>
            </Grid>
          </Grid>

          <Container>
            <Grid container direction="row" justify="space-evenly">
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                  <Box pb={3}>
                    <ProfileImage imageUrl="/images/events/EDP/Martin_Calnan.jpeg" alt="Martin Calnan" large />
                  </Box>
                  <Box>
                    <Typography component="h3" variant="h4" className={classes.smallGutter}>Martin Calnan</Typography>
                  </Box>
                  <Box>
                    <a href="https://www.linkedin.com/in/martin-calnan-086125/" title="Linked-in of Martin Calnan">
                      <LinkedInIcon className={classes.iconJumbo} />
                    </a>
                  </Box>
                </Box>
                <Box px={4}>
                  <Typography variant="body2" gutterBottom>
                    Director of Executive Education at École des Ponts Business School
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                  <Box pb={3}>
                    <ProfileImage imageUrl="/images/events/EDP/Gautam_Mahajan.jpeg" alt="Gautam Mahajan" large />
                  </Box>
                  <Box>
                    <Typography component="h3" variant="h4" className={classes.smallGutter}>Gautam Mahajan</Typography>
                  </Box>
                  <Box>
                    <a href="https://www.linkedin.com/in/mahajancvf/" title="Linked-in of Gautam Mahajan">
                      <LinkedInIcon className={classes.iconJumbo} />
                    </a>
                  </Box>
                </Box>
                <Box px={4}>
                  <Typography variant="body2" gutterBottom>
                    President Customer Value Foundation and Founder Editor of the
                    Journal of Creating Value
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                  <Box pb={3}>
                    <ProfileImage imageUrl="/images/events/EDP/Martijn_Rademakers.jpg" alt="Dr. Martijn Rademakers" large />
                  </Box>
                  <Box>
                    <Typography component="h3" variant="h4" className={classes.smallGutter}>Dr. Martijn Rademakers</Typography>
                  </Box>
                  <Box>
                    <a href="https://www.linkedin.com/in/martynrademakers/" title="Linked-in of Martijn Rademakers">
                      <LinkedInIcon className={classes.iconJumbo} />
                    </a>
                  </Box>
                </Box>
                <Box px={4}>
                  <Typography variant="body2" gutterBottom>
                    Adjunct Professor of Strategy &amp; Organization, Amsterdam Business School,
                    University of Amsterdam
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Section backgroundColor="secondary">
          <Container>
            <Grid container direction="row" justify="space-around" alignItems="center">
              <Grid item xs={12} md={4}>
                <Typography className={`${classes.white} ${classes.footerGutter}`} variant="h4">
                  Third Global<br />
                  Conference on<br />
                  Creating Value
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography className={`${classes.white} ${classes.footerGutter}`}>
                  EPBS, 6 Place Du Colonel<br />Bourgoin, 75012 Paris
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={classes.footerGutter}>
                <Typography className={classes.white}>Email</Typography>
                <a className={classes.white} href="mailto:info@pontsbschool.com" title="email to info@pontsbschool.com">info@pontsbschool.com</a>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center">
              <Grid item xs={12} md={4} style={{ marginLeft: 'auto' }}>
                <a href="https://www.linkedin.com/company/third-conference-on-creating-value/" title="Linked-in of Martin Calnan">
                  <LinkedInIcon className={classes.white} fontSize="large" />
                </a>
              </Grid>
            </Grid>
          </Container>
        </Section>

      </Container>
    </Layout>
  );
};

export default Event;
