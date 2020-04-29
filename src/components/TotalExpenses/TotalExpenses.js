import React from 'react';
import { connect } from 'react-redux';
import TotalAmountExpenses from '../../selectors/total-expenses';
import selectExpenses from '../../selectors/expenses';
import { Container } from '../../styles/components/Container';
import { H1, Span, Button, StyledLink } from './_TotalExpenses';
export const TotalExpenses = ({ totalExpenses, totalAmount }) => {
  const totalCount = totalExpenses === 1 ? 'expense' : 'expenses';
  return (
    <Container>
      <H1>
        Viewing <Span>{totalExpenses}</Span> {totalCount} with the amount of{' '}
        <Span>{totalAmount}</Span>
      </H1>
      <StyledLink to='/create'>
        <Button>Add Expense</Button>
      </StyledLink>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    totalExpenses: visibleExpenses.length,
    totalAmount: TotalAmountExpenses(visibleExpenses),
  };
};

export default connect(mapStateToProps)(TotalExpenses);
