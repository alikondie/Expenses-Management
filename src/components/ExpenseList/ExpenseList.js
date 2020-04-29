import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import selectExpenses from '../../selectors/expenses';
import { Container } from '../../styles/components/Container';
import { Title } from './_ExpenseList';
export const ExpenseList = (props) => (
  <Container>
    <Title>
      <h1>Expenses</h1>
    </Title>
    {props.expenses.length === 0 ? (
      <p>You don't have any expenses, add an expense to see them here :)</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </Container>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
