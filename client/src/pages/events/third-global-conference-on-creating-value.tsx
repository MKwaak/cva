import { NextPage } from 'next';
import Event from '../../templates/Event';
import { PostEvent } from '../../shared.types';

export const eventDetails: PostEvent = {
  title: 'Third Global Conference on Creating Value',
  intro: 'What does it mean to create value in constantly changing environment? Participate in the conference, where experts and you share knowledge and provide feedback.',
  location: 'Ecole Des Ponts Business School',
  city: 'Paris, France',
  address: '6-8 Avenue Blaise Pascal, 77420 Champs-sur-Marne, France',
  date: 'June 2-3',
  timeStampEpoch: 1591092000,
};

const ThirdConference: NextPage = () => <Event data={eventDetails} />;

export default ThirdConference;
