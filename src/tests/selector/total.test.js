import totalExpenses from '../../selectors/total-expenses';
import expenses from '../fixtures/expenses';
test('should return 0 if non expenses', () => {
  const result = totalExpenses([]);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const result = totalExpenses([expenses[0]]);
  expect(result).toBe(1.95);
});

test('should correctly add up multiple expenses', () => {
  const result = totalExpenses(expenses);
  expect(result).toBe(1467.65);
});
