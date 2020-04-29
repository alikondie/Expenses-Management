import React from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters/ExpenseListFilters';
import TotalExpenses from '../TotalExpenses/TotalExpenses';
import { Container } from '../../styles/components/Container';
const ExpenseDashboardPage = () => (
  <Container>
    <TotalExpenses />
    <ExpenseListFilters />
    <ExpenseList />
  </Container>
);

export default ExpenseDashboardPage;
