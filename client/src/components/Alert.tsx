import { FC } from 'react';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Box, Typography } from '@material-ui/core';
import {
  Done as DoneIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
    padding: `${theme.spacing(3)}px ${theme.spacing(3)}px`,
    width: '100%',
  },
  success: {
    backgroundColor: theme.palette.success.light,
    borderColor: theme.palette.success.dark,
  },
  error: {
    backgroundColor: theme.palette.error.light,
    borderColor: theme.palette.error.dark,
  },
  warning: {
    backgroundColor: theme.palette.warning.light,
    borderColor: theme.palette.warning.dark,
  },
  info: {
    backgroundColor: theme.palette.info.light,
    borderColor: theme.palette.info.dark,
  },
  type: {
    fontFamily: theme.typography.h1.fontFamily,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  gutterBottom: {
    marginBottom: theme.spacing(3),
  },
}));

interface AlertInterface {
  severity: 'success' | 'error' | 'warning' | 'info';
  gutterBottom?: boolean;
}

const Alert: FC<AlertInterface> = ({ severity, gutterBottom, children }) => {
  const classes: ClassNameMap<string> = useStyles({});
  return (
    <Box
      display="flex"
      alignItems="center"
      className={`${classes.root} ${classes[severity]} ${gutterBottom ? classes.gutterBottom : ''}`}
    >
      <Box display="flex" component="span">
        {severity === 'success' && <DoneIcon className={classes.icon} />}
        {severity === 'error' && <ErrorIcon className={classes.icon} />}
        {severity === 'warning' && <WarningIcon className={classes.icon} />}
        {severity === 'info' && <InfoIcon className={classes.icon} />}
      </Box>
      <Box display="flex" component="span">
        <Typography className={classes.type} variant="body2">
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export default Alert;
