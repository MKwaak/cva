
const apiHostname = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://api.creatingvalue.co';

export const urlSubscribeMailchimp = `${apiHostname}/subscribe/mailchimp`;
export const urlSubscribeMembership = `${apiHostname}/subscribe/membership`;
