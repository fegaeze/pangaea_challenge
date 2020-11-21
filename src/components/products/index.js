import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useQuery, useReactiveVar } from '@apollo/client';

import Cart from '../cart';
import GridLoader from '../GridLoader';
import { allProductsQuery } from '../../api/queries/products';
import { baseCurrencyVar, cartItemsVar } from '../../api/cache';
import { addNewCartItem, updateCartQuantity } from '../../api/mutations/cart';


const Products = () => {
  const [ isOpen, setOpen ] = useState(false);

  const cartItems = useReactiveVar(cartItemsVar);
  const baseCurrency = useReactiveVar(baseCurrencyVar);
  
  const { loading, error, data } = useQuery(allProductsQuery);


  const handleAddToCart = product => {
    setOpen(true);
    const productExists = cartItems.findIndex(cartItem => cartItem.id === product.id);

    if(productExists !== -1) {
      updateCartQuantity(product.id, "INCREASE");
    } else {
      addNewCartItem(product);
    }
  }

  if (error) return <p>Error :(</p>;

  return (
    <StyledContainer>
      <ReactPlaceholder 
        ready={data} 
        customPlaceholder={<GridLoader />}
      >
        <ul>
          {
            data && !loading ?
              data.products.map(product => (
                <li className="product-item" key={product.id}>
                  <img src={product.image_url} alt={product.title} />
                  <h2>{product.title}</h2>
                  <p>From: {getSymbolFromCurrency(baseCurrency)}{product.price.toFixed(2)}</p>
                  <button type="button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </li>
              ))
            : <p>No Data</p>
          }
        </ul>
      </ReactPlaceholder>
      
      <Cart open={isOpen} setOpen={setOpen} />
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

  li.product-item {
    text-align: center;
    width: calc(50% - 7.5px);
    margin: 2rem 0;

    &:nth-of-type(-n + 3) {
      margin-top: 1rem;
    }

    &:nth-last-of-type(-n + 3) {
      margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
      width: 33.33%;
      margin: 3.5rem 0;
    }

    img {
      object-fit: contain;
      max-width: 150px;
      max-height: 150px;
      height: 100%;
      width: 100%;
    }

    & > h2 {
      font-size: 0.85rem;
      font-weight: 400;
      margin-top: 2rem;
    }

    & > p {
      font-size: 1rem;
      margin-top: .4rem;
    }

    & > button {
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
