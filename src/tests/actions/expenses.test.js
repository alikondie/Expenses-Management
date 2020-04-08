import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123erze' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123erze',
  });
});

test('Should set up edit expense', () => {
  const action = editExpense('123abc', { note: 'Nnn' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'Nnn',
    },
  });
});

test('Should setup add expense action object with provided values', () => {
  const addedObject = {
    description: 'Coffee',
    note: 'coffee at louvre museum',
    amount: 123.54,
    createAt: 1023546,
  };
  const action = addExpense(addedObject);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...addedObject,
      id: expect.any(String),
    },
  });
});

test('Should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createAt: 0,
      id: expect.any(String),
    },
  });
});
