import ApolloClient from 'apollo-boost';

export const client: ApolloClient<{}> = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});
