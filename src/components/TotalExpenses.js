import React from 'react';
import { connect } from 'react-redux';
import TotalAmountExpenses from '../selectors/total-expenses';
import selectExpenses from '../selectors/expenses';

export const TotalExpenses = ({ totalExpenses, totalAmount }) => {
  const totalCount = totalExpenses === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h2>
        Viewing {totalExpenses} {totalCount} with the amount of {totalAmount}
      </h2>
    </div>
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
