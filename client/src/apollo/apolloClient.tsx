import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';

const apolloClient = new ApolloClient({
  uri: '//weaviate.creatingvalue.co/v1/graphql',
  fetch,
});

export default apolloClient;
