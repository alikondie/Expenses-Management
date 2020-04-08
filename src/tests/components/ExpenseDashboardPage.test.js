import React from 'react';
import ExpenseDashboard from '../../components/ExpenseDashboard';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpenseDashboard', () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect(wrapper).toMatchSnapshot();
});
