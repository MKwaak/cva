import { FC } from 'react';
import { Box, Typography, Theme, makeStyles } from '@material-ui/core';
import HoverReplace from './HoverReplace';

const useStyles = makeStyles((theme: Theme) => ({
  containerImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundBlendMode: 'saturation',
  },
  name: {
    color: theme.palette.common.white,
  },
  [theme.breakpoints.down('md')]: {
    speaker: {
      height: '400px',
    },
    name: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  [theme.breakpoints.up('md')]: {
    speaker: {
      height: '500px',
    },
    containerImage: {
      backgroundPosition: 'center center',
    },
    name: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
  },
}));

interface SpeakerProps {
  imageUrl: string;
  name: string;
  content: JSX.Element;
}

const Speaker: FC<SpeakerProps> = ({ imageUrl, name, content }) => {
  const classes = useStyles();
  return (
    <Box className={classes.speaker}>
      <HoverReplace
        mainRender={(
          <Box display="flex" className={classes.containerImage} style={{ backgroundImage: `linear-gradient(black, black), url(${imageUrl})` }}>
            <Typography className={classes.name}>{name}</Typography>
          </Box>
        )}
        hoverRender={content}
      />
    </Box>
  );
};

export default Speaker;
