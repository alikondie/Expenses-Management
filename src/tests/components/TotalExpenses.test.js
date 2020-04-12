import React from 'react';
import { shallow } from 'enzyme';
import { TotalExpenses } from '../../components/TotalExpenses';
import expenses from '../fixtures/expenses';

test('Should render a totalExpenses with 1 data', () => {
  const wrapper = shallow(
    <TotalExpenses totalExpenses={1} totalAmount={0.5} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should render a ExpenseListItem with multiple data ', () => {
  const wrapper = shallow(
    <TotalExpenses totalExpenses={45} totalAmount={1354} />
  );
  expect(wrapper).toMatchSnapshot();
});
