import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { LocalStorage } from '../utils/storage';

const port = process.env.PORT || 3333;
const httpLink = createHttpLink({
  uri: `http://localhost:${port}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = LocalStorage.get('loginToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
