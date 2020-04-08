import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>

    <p>
      {props.amount} - {moment(props.createAt).format('DD/MM/YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
