import expensesReducer from '../../reducers/expenses';
import expenses from './../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('should not remove expenses if no id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '45',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '2',
    description: 'aze',
    note: '',
    amount: 15.25,
    createAt: 1564,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'lol',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[2]).toEqual({ ...state[2], ...updates });
});

test('should not edit if expense not found', () => {
  const updates = {
    description: 'lol',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '101',
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
