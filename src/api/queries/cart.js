import { gql } from '@apollo/client';


export const allCurrenciesQuery = gql`
  query GetCurrencies {
    currency 
  }
`

export const baseCurrencyQuery = gql`
  query GetBaseCurrency {
    baseCurrency @client
  }
`

export const allCartItemsQuery = gql`
  query GetAllCartItems {
    cartItems @client { 
      id, 
      title, 
      image_url, 
      price, 
      quantity, 
      baseCurrencyQuery
    }
  }
`

export const cartTotalQuery = gql`
  query GetAllCartTotal {
    cartTotal @client { 
      currency,
      amount
    }
  }
`