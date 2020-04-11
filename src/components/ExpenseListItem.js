import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

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
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>

    <p>
      {numeral(props.amount).format('0,0[.]00€')} -{' '}
      {moment(props.createAt).format('DD/MM/YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
