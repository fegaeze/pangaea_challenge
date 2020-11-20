import React from 'react';
import styled from 'styled-components';


const Header = () => {
  return (
    <StyledContainer>
      <div>
        <h1>All Products</h1>
        <p>A 360° look at Lumin</p>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.header`
  padding: 2.5rem;
  min-height: 330px;
  background: #F5F5F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  & > div {
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;

    h1 {
      font-family: 'Lora', serif;
      font-weight: 400;
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      margin-top: .5rem;
    }
  }
`

export default Header;
