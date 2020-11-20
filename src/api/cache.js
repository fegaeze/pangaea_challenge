import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartTotal: {
          read() {
            return cartTotalVar();
          }
        },
        cartItems: {
          read() {
            return cartItemsVar();
          }
        },
      }
    }
  }
})

export const cartTotalVar = makeVar(0);

export const cartItemsVar = makeVar([]);

export const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache
});