import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  backgroundWhite: {
    backgroundColor: theme.palette.common.white,
  },
  backgroundSecondary: {
    backgroundColor: theme.palette.secondary.dark,
  },
  sectionFirst: {
    marginTop: theme.spacing(9),
    position: 'relative',
    background: "url('./images/generic/cva-emblem.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60vw -27rem',
    backgroundSize: '65rem 65rem',
    '&:after': {
      content: '""',
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -2,
    },
  },
  [theme.breakpoints.down('sm')]: {
    section: {
      '&:not(.noPadding)': {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    },
    sectionFirst: {
      '&:after': {
        backgroundImage: "url('/images/events/EDP/background_louvre_sm.jpg')",
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    section: {
      '&:not(.noPadding)': {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
      },
    },
  },
  [theme.breakpoints.only('md')]: {
    sectionFirst: {
      '&:after': {
        backgroundImage: "url('/images/events/EDP/background_louvre_lg.jpg')",
      },
    },
  },
  [theme.breakpoints.up('lg')]: {
    sectionFirst: {
      '&:after': {
        backgroundImage: "url('/images/events/EDP/background_louvre_xxl.jpg')",
      },
    },
  },
}));

type backgroundColor = 'secondary' | 'white';

interface SectionProps {
  first?: boolean;
  backgroundColor?: backgroundColor;
  noPadding?: boolean;
}

const Section: FC<SectionProps> = ({ children, first, backgroundColor, noPadding }) => {
  const classes = useStyles({});
  return (
    <section className={`
      ${classes.section}
      ${noPadding && 'noPadding'}
      ${first && classes.sectionFirst}
      ${backgroundColor === 'secondary' && classes.backgroundSecondary}
      ${backgroundColor === 'white' && classes.backgroundWhite}
    `}
    >
      {children}
    </section>
  );
};

export default Section;
