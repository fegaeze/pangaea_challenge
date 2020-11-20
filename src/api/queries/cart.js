import { gql } from '@apollo/client';

export const ALL_CURRENCIES = gql`
  query GetCurrencies {
    currency 
  }
`