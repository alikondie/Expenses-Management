import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  //console.log('this is the selector', expenses);
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'amount') {
        return a.amount < b.amount ? -1 : 1;
      } else if (sortBy === 'date') {
        return a.createAt < b.createAt ? 1 : -1;
      }
    });
};
