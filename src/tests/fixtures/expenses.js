import moment from 'moment';

export default [
  {
    id: '1',
    description: 'coffee',
    note: 'lol',
    amount: 1.95,
    createAt: 0,
  },
  {
    id: '2',
    description: 'gfdgfd',
    note: 'real',
    amount: 65.5,
    createAt: moment(0).subtract(5, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'erez',
    note: '',
    amount: 1400,
    createAt: moment(0).add(5, 'days').valueOf(),
  },
  {
    id: '4',
    description: 'coffgfdee',
    note: 'hahahaha',
    amount: 0.2,
    createAt: moment(0).add(6, 'days').valueOf(),
  },
];
