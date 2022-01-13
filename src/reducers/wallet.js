import { SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [
    'USD',
    'CAD',
    'EUR',
    'GBP',
    'ARS',
    'BTC',
    'LTC',
    'JPY',
    'CHF',
    'AUD',
    'CNY',
    'ILS',
    'ETH',
    'XRP',
  ],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
