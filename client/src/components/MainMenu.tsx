import { FC } from 'react';
import { List, ListItem, makeStyles, Theme } from '@material-ui/core';
import Link from './Link';

const pages = [
  { title: 'Home', href: '/' },
  { title: 'Countries', href: '/countries' },
  { title: 'Upcoming Event', href: '/events/third-global-conference-on-creating-value' },
  { title: 'Articles', href: '/articles' },
  { title: 'Join-us', href: '/join-us' },
  { title: 'Contact', href: '/contact' },
];

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    color: 'white',
    fontFamily: "'Quicksand', georgia, sans-serif",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.secondary.main,
      cursor: 'pointer',
    },
  },
}));

const MainMenu: FC = () => {
  const classes = useStyles({});
  return (
    <List
      component="nav"
      aria-label="main main-navigation"
      aria-labelledby="main-nav-button"
      id="main-nav"
    >
      {pages.map(({ href, title }) => (
        <ListItem
          button
          component={Link}
          href={href}
          key={title}
          className={classes.listItem}
        >
          {title}
        </ListItem>
      ))}
    </List>
  );
};

export default MainMenu;
