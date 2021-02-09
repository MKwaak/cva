import { FC } from 'react';
import clsx from 'clsx';
import { Typography, Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const useStyles = makeStyles((theme: Theme) => ({
  badge: {
    padding: '.5rem 1rem',
    backgroundColor: '#DF0505',
  },
  badgeText: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: '1rem',
    color: theme.palette.common.white,
  },
  badgeTextLarge: {
    fontSize: '1.5rem',
  },
}));

interface Props {
  large?: boolean;
}

const Badge: FC<Props> = ({ large = undefined }) => {
  const classes: ClassNameMap = useStyles({});
  return (
    <Box className={classes.badge}>
      <Typography className={clsx(classes.badgeText, large && classes.badgeTextLarge)}>
        Cancelled due to COVID
      </Typography>
    </Box>
  );
};

export default Badge;
