export default (expenses) => {
  if (expenses.length === 0) return 0;
  const amounts = expenses.map((expense) => expense.amount);
  return amounts.reduce((a, b) => a + b, 0);
};
