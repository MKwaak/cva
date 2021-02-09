import { FC } from 'react';
import { Theme, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  white: {
    borderColor: theme.palette.common.white,
  },
  mediumGutter: {
    marginBottom: theme.spacing(4),
  },
}));

type color = 'white';

interface DividerProps {
  color?: color;
  gutterBottom?: boolean;
}

const Divider: FC<DividerProps> = ({ color, gutterBottom }) => {
  const classes = useStyles({});
  return (
    <Box
      component="div"
      className={`
        ${classes.divider}
        ${color === 'white' && classes.white}
        ${gutterBottom && classes.mediumGutter}
        divider
      `}
    />
  );
};

export default Divider;
