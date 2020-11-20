import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { ALL_CURRENCIES } from '../api/currencies';


const CurrencyFilter = () => {

  const { loading, error, data } = useQuery(ALL_CURRENCIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(!data) return <p>No Data</p>


  return (
    <StyledSelect>
      {
        data.currency.map((currency) => (
          <option key={currency}>{currency}</option>
        ))
      }
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  border: none;
  outline: none;
  margin-top: 1.5rem;
  padding: 6px 13px 5px 10px;
`

export default CurrencyFilter;
