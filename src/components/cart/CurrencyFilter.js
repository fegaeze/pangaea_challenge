import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useReactiveVar } from '@apollo/client';

import { baseCurrencyVar } from '../../api/cache';
import { allCurrenciesQuery } from '../../api/queries/cart';


const CurrencyFilter = ({ getUpdatedPrices }) => {

  const baseCurrency = useReactiveVar(baseCurrencyVar);

  const [ currency, setCurrency ] = useState(baseCurrency)
  const { loading, error, data } = useQuery(allCurrenciesQuery);

  const handleChange = e => {
    setCurrency(e.target.value)
    getUpdatedPrices({
      variables: { 
        currency: e.target.value
      }
    })
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(!data) return <p>No Data</p>


  return (
    <StyledSelect value={currency} onChange={(e) => handleChange(e)}>
      {
        data.currency.map((currency) => (
          <option value={currency} key={currency}>{currency}</option>
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
