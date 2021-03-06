import requestApi from '../services';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_COIN = 'GET_COIN';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';

export const deleteExpenses = (id) => ({
  type: DELETE_ELEMENT,
  id,
});

export const userLogin = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export const getCoint = (payload) => ({
  type: GET_COIN,
  payload,
});

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

export const apiThunk = (objt) => (dispatch) => {
  requestApi().then((coin) => {
    const result = { ...objt, exchangeRates: coin };
    dispatch(saveExpenses(result));
  });
};
