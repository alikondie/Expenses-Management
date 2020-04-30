import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import {
  editExpense,
  startRemoveExpense,
  startEditExpense,
} from '../../actions/expenses';

import { Button, Container } from './_EditExpensePage';
const EditExpensePage = (props) => {
  return (
    <Container>
      <h1>{props.expense.description}</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <Button
        onClick={(e) => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }));
          props.history.push('/');
        }}
      >
        Remove
      </Button>
    </Container>
  );
};

const mapStateToProps = (state, props) => {
  console.log('logging', state.expenses);
  return {
    expense: state.expenses.find(
      (expense) => expense.id && expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
