import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_API_TOKEN}` || "",
        }
    }
})

const httpLink = createHttpLink({
    uri: process.env.GITHUB_API_URL || "",
  });

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default apolloClient;