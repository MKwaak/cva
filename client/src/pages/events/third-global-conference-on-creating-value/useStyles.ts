import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
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
