import { FC } from 'react';
import { Typography, List, ListItem, Box } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const useStyles = makeStyles((theme: Theme) => ({
  timeTableListItem: {
    flexDirection: 'column',
  },
  heading: {
    minHeight: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    root: {
      '& > :nth-child(1)': {
        minHeight: '270px',
      },
      '& > :nth-child(2)': {
        minHeight: '300px',
      },
      '& > :nth-child(3)': {
        minHeight: '400px',
      },
    },
  },
}));

interface TimeTableProps {
  data: {
    itemTitle: string;
    listItems: string[];
    key: string;
  }[];
}

const defaultProps = {};

const TimeTable: FC<TimeTableProps> = ({ data }) => {
  const classes: ClassNameMap<string> = useStyles({});

  return (
    <Box className={classes.root}>
      {data.map(({ itemTitle, listItems, key }) => (
        <Box key={key}>
          <List dense>
            <ListItem className={classes.timeTableListItem}>
              <Box className={classes.heading}>
                <Typography variant="body2"><strong>{itemTitle}</strong></Typography>
              </Box>
              <List dense>
                {listItems.map((item) => (
                  <ListItem key={item.trim().toLowerCase()}>
                    <Typography variant="body2">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          </List>
        </Box>
      ))}
    </Box>
  );
};

TimeTable.defaultProps = defaultProps;

export default TimeTable;
