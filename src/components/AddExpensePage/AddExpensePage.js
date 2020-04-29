import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../../actions/expenses';
import { Container } from './_AddExpensePage';

const AddExpensePage = (props) => (
  <Container>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push('/');
      }}
    />
  </Container>
);

export default connect()(AddExpensePage);
