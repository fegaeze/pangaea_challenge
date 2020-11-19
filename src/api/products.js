import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`
  query GetProducts {
    products {
      id,
      title,
      image_url,
      price(currency: USD)
    }
  }
`