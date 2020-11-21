import { gql } from '@apollo/client';


export const allCurrenciesQuery = gql`
  query GetCurrencies {
    currency 
  }
`