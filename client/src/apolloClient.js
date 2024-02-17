// dsm/src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// HTTP link
const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql', // Replace with your GraphQL endpoint
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZmFkMDBhZTQ3YWJhZWM0ZjdlZjgyIn0sImlhdCI6MTcwODEwOTA1NiwiZXhwIjoxNzA4MTI3MDU2fQ.cDIUqzI6dblAKHODNIt-I8av3R0BD21POkAd1yU8aAw`, // Optional: Include if your API requires an auth token
  },
});

// Apollo Client instance
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
