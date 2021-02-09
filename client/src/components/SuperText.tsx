import { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
}));

const SuperText: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <sup className={classes.root}>
      {children}
    </sup>
  );
};

export default SuperText;
