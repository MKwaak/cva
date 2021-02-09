import { FC } from 'react';
import { makeStyles, Theme, Box } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const useStyles = makeStyles((theme: Theme) => ({
  infoBlock: {
    height: '100%',
  },
  infoBlockRegular: {
    backgroundColor: theme.palette.common.white,
  },
  infoBlockSecondary: {
    backgroundColor: theme.palette.secondary.dark,
  },
  infoBlockPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('md')]: {
    infoBlock: {
      padding: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('md')]: {
    infoBlock: {
      padding: theme.spacing(12),
    },
  },
}));

type variant = 'primary' | 'secondary';

interface InfoBlockProps {
  variant?: variant;
}

const InfoBlock: FC<InfoBlockProps> = ({ children, variant }) => {
  const classes: ClassNameMap<string> = useStyles({});

  const variants = {
    primary: classes.infoBlockPrimary,
    secondary: classes.infoBlockSecondary,
  };

  return (
    <Box
      className={`
        ${classes.infoBlock}
        ${variant ? variants[variant] : classes.infoBlockRegular}
      `}
    >
      {children}
    </Box>
  );
};

export default InfoBlock;
