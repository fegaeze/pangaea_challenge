import React, { useEffect } from 'react';
import styled from 'styled-components';

import CartFooter from './CartFooter';
import ArrowRight from './svg/ArrowRight';
import CurrencyFilter from './CurrencyFilter';


const Cart = ({ open, setOpen }) => {
  
  useEffect(() => {
    if(open) document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, [open]);

  return (
    <StyledContainer className={open ? "open" : null}>
      <div>
        <header className="cart-header">
          <div>
            <button onClick={() => setOpen(false)}>
              <ArrowRight />
            </button>

            <h2>Your Cart</h2>
          </div>

          <CurrencyFilter />
        </header>

        <StyledCarlList>
          <li className="cart-item">
            <div className="cart-item-content">
              <h3>Clarifying Body Wash</h3>
              <div>
                <StyledQuantitySelector>
                  <button className="selector">-</button>
                  <p>1</p>
                  <button className="selector">+</button>
                </StyledQuantitySelector>
                <p>US$11.00</p>
              </div>
            </div>
            <div className="cart-item-image">
              <img src="https://i.shgcdn.com/b44f5ef8-6bc0-4a4a-8eef-1f7ced30503d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Clarifying Body Wash"/>
              <button>X</button>
            </div>
          </li>

          <li className="cart-item">
            <div className="cart-item-content">
              <h3>Clarifying Body Wash</h3>
              <div>
                <StyledQuantitySelector>
                  <button className="selector">-</button>
                  <p>1</p>
                  <button className="selector">+</button>
                </StyledQuantitySelector>
                <p>US$11.00</p>
              </div>
            </div>
            <div className="cart-item-image">
              <img src="https://i.shgcdn.com/b44f5ef8-6bc0-4a4a-8eef-1f7ced30503d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Clarifying Body Wash"/>
              <button>X</button>
            </div>
          </li>
        </StyledCarlList>

        <CartFooter />
      </div>
    </StyledContainer>
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

const StyledCarlList = styled.ul`
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

  .cart-header {
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
  }
`

export default Cart;
