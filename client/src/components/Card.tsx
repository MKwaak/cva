import { FC } from 'react';
import { Grid, Box, CardActionArea, CardContent, Paper, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

import Year from './Year';
import Link from './Link';
import Badge from './Badge';

const useStyles = makeStyles((theme: Theme) => ({
  promoListTitle: {
    paddingBottom: theme.spacing(1),
  },
  eventPaper: {
    padding: theme.spacing(2),
  },
  flatPaper: {
    boxShadow: 'none',
  },
  elevateOnHover: {
    boxShadow: theme.shadows[10],
  },
  cardActionArea: {
    color: theme.palette.text.primary,
  },
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
}));

interface CardProps {
  highlight?: boolean;
  showIntro?: boolean;
  title: string;
  slug: string;
  date: string;
  location?: string;
  timeStampEpoch?: number;
  intro?: string;
  cancelled?: boolean;
}

const defaultProps = {
  highlight: false,
  intro: undefined,
  location: undefined,
  timeStampEpoch: undefined,
  cancelled: undefined,
};

const Card: FC<CardProps> = ({
  children,
  highlight,
  showIntro,
  title,
  slug,
  date,
  timeStampEpoch,
  intro,
  cancelled,
}) => {
  const classes: ClassNameMap = useStyles({});

  return (
    <Paper
      className={`${classes.eventPaper} ${highlight ? classes.elevateOnHover : ''} ${
        !highlight ? classes.flatPaper : ''
      }`}
    >
      <CardActionArea className={classes.cardActionArea} component={Link} disableRipple href={slug}>
        <CardContent>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="overline" display="block">
                {date}
                {timeStampEpoch && (
                  <>
                    {', '}
                    <Year timeStamp={timeStampEpoch} />
                  </>
                )}
              </Typography>
            </Grid>
            <Grid item>
              {cancelled && <Badge />}
            </Grid>
          </Grid>
          <Box mt={1}>
            <Typography component="h3" variant="h5" className={`${classes.promoListTitle} ${classes.smallGutter}`}>
              {title}
            </Typography>
            {showIntro && (
              <Typography variant="body2" className={classes.smallGutter}>
                {intro}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
      {children}
    </Paper>
  );
};

Card.defaultProps = defaultProps;

export default Card;
