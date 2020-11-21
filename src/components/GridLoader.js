import React from 'react';
import styled from 'styled-components';
import { RectShape } from 'react-placeholder/lib/placeholders';


const GridLoader = () => {
  return (
    <StyledContainer>
      <div className="item-loaders">
        <RectShape color='#CECECE' style={{width: '100%%', height: 150, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 35, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 20, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 50, marginBottom: 10}}/>
      </div>

      <div className="item-loaders">
        <RectShape color='#CECECE' style={{width: '100%%', height: 150, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 35, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 20, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 50, marginBottom: 10}}/>
      </div>

      <div className="item-loaders">
        <RectShape color='#CECECE' style={{width: '100%%', height: 150, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 35, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 20, marginBottom: 10}}/>
        <RectShape color='#CECECE' style={{width: '100%%', height: 50, marginBottom: 10}}/>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div.item-loaders {
    width: calc(50% - 15px);

    @media (min-width: 768px) {
      width: calc(33.33% - 15px);
    }
  }
`

export default GridLoader;
