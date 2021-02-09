import { FC } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    listStyleType: 'none',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

interface PromoListItemProps {
  key?: string;
}

const PromoListItem: FC<PromoListItemProps> = ({
  children,
  key,
}) => {
  const classes: ClassNameMap<string> = useStyles({});
  return (
    <li key={key} className={classes.root}>
      {children}
    </li>
  );
};

export default PromoListItem;
