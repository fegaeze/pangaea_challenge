import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useReactiveVar } from '@apollo/client';

import Cart from '../cart';
import CartHeader from '../cart/CartHeader';
import { cartItemsVar } from '../../api/cache';
import { ALL_PRODUCTS } from '../../api/queries/products';
import { addNewCartItem, updateCartQuantity } from '../../api/mutations/cart';


const Products = () => {

  const [ isOpen, setOpen ] = useState(false);
  const cartItems = useReactiveVar(cartItemsVar);
  const { loading, error, data } = useQuery(ALL_PRODUCTS);

  useEffect(() => {
    setOpen(false);
  }, [])

  const addToCart = (product) => {

    setOpen(true);
    const productExists = cartItems.findIndex(cartItem => cartItem.id === product.id);

    if(productExists !== -1) {
      updateCartQuantity(product.id, "INCREASE");
    } else {
      addNewCartItem(product);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(!data) return <p>No Data</p>

  return (
    <StyledContainer>
      <ul>
        {
          data.products.map(product => (
            <li className="product-item" key={product.id}>
              <img src={product.image_url} alt={product.title} />
              <h2>{product.title}</h2>
              <p>From: ${product.price.toFixed(2)}</p>
              <button type="button" onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))
        }
      </ul>
      
      <Cart open={isOpen}>
        <CartHeader setOpen={setOpen} />
      </Cart>
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
