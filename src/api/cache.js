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
        baseCurrency: {
          read() {
            return baseCurrencyVar();
          }
        }
      }
    }
  }
})

export const cartTotalVar = makeVar({
  amount: 0,
  currency: 'USD'
});

export const cartItemsVar = makeVar([]);

export const baseCurrencyVar = makeVar('USD');


export const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache
});