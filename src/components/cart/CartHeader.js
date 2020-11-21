import React from 'react';
import styled from 'styled-components';

import ArrowRight from '../svg/ArrowRight';


const CartHeader = ({ setOpen, children }) => {

  const CurrencyFilter = children;

  return (
    <StyledContainer>
      <div>
        <button onClick={() => setOpen(false)}>
          <ArrowRight />
        </button>

        <h2>Your Cart</h2>
      </div>

      {CurrencyFilter}
    </StyledContainer>
  );
}

const StyledContainer = styled.header`
  position: relative;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    text-transform: uppercase;
    color: #696969;
    font-weight: 500;
    font-size: 0.725rem;
  }

  button {
    position: absolute;
    left: 0;
    background: transparent;
    border-radius: 50%;
    border: 1px solid rgb(198, 204, 199);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default CartHeader;
