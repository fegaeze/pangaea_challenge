import React from 'react';
import styled from 'styled-components';

import { deleteCartItem, updateCartQuantity } from '../../api/mutations/cart';


const QuantitySelector = ({ quantity, id }) => {

  const updateQuantity = type => {
    if(type === "DECREASE" && quantity === 1) {
      deleteCartItem(id)
    } else if (type === "INCREASE") {
      updateCartQuantity(id, "INCREASE")
    } else {
      updateCartQuantity(id, "DECREASE")
    }
  }

  return (
    <StyledQuantitySelector>
      <button className="selector" onClick={() => updateQuantity("DECREASE")}>-</button>
      <p>{quantity}</p>
      <button className="selector" onClick={() => updateQuantity("INCREASE")}>+</button>
    </StyledQuantitySelector>
  );
}

const StyledQuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #bcbcbc;
  min-width: 76px;
  margin-right: 1rem;

  & > button.selector {
    color: #000;
    background: transparent;
    min-height: 35px;
  }

  & > p {
    font-size: 0.825rem;
    text-align: center;
  }

  & > * {
    width: 33.33%;
  }
`

export default QuantitySelector;
