import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase-db';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
const createMockStore = configureMockStore([thunk]);
const uid = 'haheregfdgdf';
const defaultAuthState = { auth: { uid } };
beforeEach((done) => {
  database.ref('expenses').set({});
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createAt }) => {
    expensesData[id] = { description, note, amount, createAt };
  });
  database
    .ref(`users/${uid}/expenses`)
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

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  //console.log(store);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test('should edit expense in firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const updates = {
    description: '4656re',
    note: 'ee',
    amount: 1400,
    createAt: moment(0).add(89, 'days').valueOf(),
  };
  const id = expenses[2].id;
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates,
    });
    done();
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
  const store = createMockStore(defaultAuthState);
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
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(addedObject);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(addedObject);
      done();
    });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
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
