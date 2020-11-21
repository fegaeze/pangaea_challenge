import React from 'react';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import getSymbolFromCurrency from 'currency-symbol-map';

import { cartTotalVar } from '../../api/cache';


const CartFooter = () => {
  
  const cartTotal = useReactiveVar(cartTotalVar);

  return (
    <StyledContainer>
      <div className="cart-total">
        <p>Subtotal</p>
        <p>{getSymbolFromCurrency(cartTotal.currency)}{cartTotal.amount.toFixed(2)}</p>
      </div>

      <div className="cart-action-btns">
        <button>Make this a subscription (Save 20%)</button>
        <button>Proceed to Checkout</button>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.5rem;
  padding-bottom: 2rem;
  border-top: 1px solid #d0d0d0;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1;
  background: #F2F2EF;

  .cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-child {
      font-size: .8rem;
      font-weight: 400;
    }
  
    p:last-child {
      font-size: .95rem;
      font-weight: 600;
    }
  }

  .cart-action-btns {
    margin-top: 1.5rem;

    button {
      width: 100%;
      text-transform: uppercase;
      padding: 1rem;
      font-size: .75rem;
      font-weight: 300;

      &:first-child {
        color: #2b2e2b;
        letter-spacing: 0.96px;
        border: 1px solid #2b2e2b;
        background-color: #fff;
      }
    
      &:last-child {
        color: #fff;
        margin-top: 15px;
        letter-spacing: 2px;
        background-color: #4b5548;
      }
    }
  }
`

export default CartFooter;
