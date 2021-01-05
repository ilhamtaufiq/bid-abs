
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error"



// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHQL_URL || "https://abs-dpkpp.herokuapp.com/graphql",
  fetchOptions: {
    mode: 'no-cors',
  },
});

// Error Handling
const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) {
    // Add something like this to set the error message to the one from the server response
    networkError.message = networkError.result.errors[0].debugMessage

    console.log(`[Network error]: ${networkError}`)
  }
});


// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})



export default apolloClient;
