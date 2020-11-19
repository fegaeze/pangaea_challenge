import React from 'react';
import styled from 'styled-components';


const Products = () => {
  return (
    <StyledContainer>
      <ul>
        <li>
          <img src="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968" alt="Age Management Set" />
          <h2>Age Management Set</h2>
          <p>From: $52.00</p>
          <button>Add to Cart</button>
        </li>
      </ul>
    </StyledContainer>
  );
}

const StyledContainer = styled.main`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
  
  ul {
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    text-align: center;
    width: calc(50% - 7.5px);
    margin: 3.5rem 0;

    @media (min-width: 768px) {
      width: 33.33%;
    }

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 170px;
      flex: 1 1 0%;
    }

    h2 {
      font-size: 0.95rem;
      font-weight: 300;
      margin-top: 2rem;
    }

    p {
      font-size: 1rem;
      margin-top: .4rem;
    }

    button {
      margin-top: 1.5rem;
      transition: all 250ms ease 0s;
      outline: none;
      border: 0px;
      font-weight: 600;
      min-height: 50px;
      max-width: 200px;
      width: 100%;
      background: rgb(75, 85, 72);
      color: rgb(252, 252, 249);
      
      &:hover {
        background: rgb(43, 46, 43);
      }
    }
  }
`

export default Products;
