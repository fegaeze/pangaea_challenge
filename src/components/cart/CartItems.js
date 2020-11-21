import React from 'react';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import getSymbolFromCurrency from 'currency-symbol-map';

import { cartItemsVar } from '../../api/cache';
import QuantitySelector from './QuantitySelector';
import { deleteCartItem } from '../../api/mutations/cart';


const CartItems = () => {
  
  const cartItems = useReactiveVar(cartItemsVar);

  return (
    <StyledCartItems>
      {
        cartItems.map(({id, title, image_url, price, quantity, baseCurrencyQuery}) => (
          <li className="cart-item" key={id}>
            <div className="cart-item-content">
              <h3>{title}</h3>
              <div>
                <QuantitySelector quantity={quantity} id={id} />
                <p>{getSymbolFromCurrency(baseCurrencyQuery)}{price.toFixed(2)}</p>
              </div>
            </div>
            <div className="cart-item-image">
              <img src={image_url} alt={title} />
              <button onClick={() => deleteCartItem(id)}>X</button>
            </div>
          </li>
        ))
      }
    </StyledCartItems>
  );
}

const StyledCartItems = styled.ul`
  max-height: calc(100vh - 270px);
  padding: 1rem 0 2rem;
  overflow-y: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  .cart-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: #fff;
    margin-bottom: 1rem;
  }

  .cart-item-content {
    padding: .8rem 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 140px;

    h3 {
      text-align: left;
      font-size: 0.9rem;
      color: #1e2d2b;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 0.9rem;
      }
    }
  }

  .cart-item-image {
    background-color: #fdfdfd;
    max-width: 160px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    button {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.825rem;
      padding: 0.35rem 0.5rem;
      background: transparent;
    }

    img {
      max-width: 70px;
      max-height: 70px;
      object-fit: contain;
    }
  }
`

export default CartItems;
