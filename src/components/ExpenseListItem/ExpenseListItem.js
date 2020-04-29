import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';
import { Expense, Title, ExpenseLink, StyledLink } from './_ExpenseListItem';
numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '€',
  },
});

numeral.locale('fr');

export const ExpenseListItem = (props) => (
  <Expense>
    <StyledLink to={`/edit/${props.id}`}>
      <Title>{props.description}</Title>
      <p>
        {numeral(props.amount).format('0,0[.]00€')} -{' '}
        {moment(props.createAt).format('DD/MM/YYYY')}
      </p>
    </StyledLink>
  </Expense>
);

export default ExpenseListItem;
