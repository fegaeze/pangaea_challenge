import { gql } from '@apollo/client';

export const allProductsQuery = gql`
  query GetProducts($currency: Currency = USD) {
    products {
      id,
      title,
      image_url,
      price(currency: $currency)
    }
  }
`