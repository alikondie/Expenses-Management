import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  startSetExpenses,
} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import { DayPickerRangeController } from 'react-dates';
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  database.ref('expenses').set({});
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createAt }) => {
    expensesData[id] = { description, note, amount, createAt };
  });
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done());
});

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
    expense: addedObject,
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const addedObject = {
    description: 'Coffee',
    note: 'coffee at louvre museum',
    amount: 123.54,
    createAt: 1023546,
  };
  store
    .dispatch(startAddExpense(addedObject))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...addedObject,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(addedObject);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const addedObject = {
    description: '',
    note: '',
    amount: 0,
    createAt: 0,
  };
  store
    .dispatch(startAddExpense(addedObject))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...addedObject,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(addedObject);
      done();
    });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});
// test('Should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createAt: 0,
//       id: expect.any(String),
//     },
//   });
// });
