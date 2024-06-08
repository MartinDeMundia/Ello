import { useEffect, useState } from 'react';
import { useQuery, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import gql from 'graphql-tag';
require('dotenv').config();

const GRAPHQL_SERVER_URL = process.env.REACT_APP_GRAPHQL_SERVER_URL;
const GRAPHQL_SERVER_CREDENTIALS = process.env.REACT_APP_GRAPHQL_SERVER_CREDENTIALS;

const httpLink = createHttpLink({
  uri: GRAPHQL_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: GRAPHQL_SERVER_CREDENTIALS ? `Bearer ${GRAPHQL_SERVER_CREDENTIALS}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const BOOKS_QUERY = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

function useBooksQuery(searchTerm) {
  const [books, setBooks] = useState([]);
  const { loading, error, data } = useQuery(BOOKS_QUERY, { client });

  useEffect(() => {
    if (!loading && !error) {
      setBooks(data?.books || []);
    }
  }, [loading, error, data]);

  return { books, loading, error };
}

export default useBooksQuery;