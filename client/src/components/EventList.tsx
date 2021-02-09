import { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { LocationOn as LocationOnIcon } from '@material-ui/icons';
import PromoList from './PromoList';
import PromoListItem from './PromoListItem';
import Card from './Card';

import { eventDetails as upcomingConferenceDetails } from '../pages/events/third-global-conference-on-creating-value';

const EventList: FC = () => (
  <PromoList>
    <PromoListItem>
      <Card
        highlight
        showIntro
        slug="/events/third-global-conference-on-creating-value"
        title={upcomingConferenceDetails.title}
        intro={upcomingConferenceDetails.intro}
        location={upcomingConferenceDetails.location}
        date="October 20 and 21st"
        cancelled
      >
        <Box alignItems="center" display="flex">
          <Box mr={0.5}>
            <LocationOnIcon color="secondary" />
          </Box>
          <Box>
            <Typography color="secondary" variant="overline">
              {upcomingConferenceDetails.location}
            </Typography>
          </Box>
        </Box>
      </Card>
    </PromoListItem>
    {/* <PromoListItem>
      <Card
        slug="/events/first-global-conference-on-creating-value"
        title="1st Global conference For Creating Value"
        intro="This is a small intro that is and is about the upcoming event."
        date="May 23-24"
      >
        <Box alignItems="center" display="flex">
          <Box mr={0.5}>
            <LocationOnIcon color="secondary" />
          </Box>
          <Box>
            <Typography color="secondary" variant="overline">
              {location}
            </Typography>
          </Box>
        </Box>
      </Card>
    </PromoListItem> */}
  </PromoList>
);

export default EventList;
