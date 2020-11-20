import React, { useEffect } from 'react';
import styled from 'styled-components';

import CartItems from './CartItems';
import CartFooter from './CartFooter';


const Cart = ({ open, children }) => {

  const CartHeader = children;
  
  useEffect(() => {
    if(open) document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, [open]);


  return (
    <StyledContainer className={open ? "open" : null}>
      <div>
        {CartHeader}
        <CartItems />
        <CartFooter />
      </div>
    </StyledContainer>
  );
}


const StyledContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(205, 209, 206, .8);
  backdrop-filter: blur(3px);
  visibility: hidden;
  transition: visibility .2s ease-in-out 0.1s;

  & > div {
    background: #F2F2EF;
    overflow-y: auto;
    padding: 1.2rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
    max-width: 550px;
    width: 100%;
    opacity: 0;
    transform: translateX(100%);
    transition: transform .4s cubic-bezier(0.28, 0.47, 0.29, 0.86), opacity .4s ease-in-out 0.1s;
  }

  &.open {
    visibility: visible;

    & > div {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

export default Cart;
