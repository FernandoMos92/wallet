export const LOGIN_USER = 'LOGIN_USER';
export const GET_COIN = 'GET_COIN';

export const userLogin = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export const getCoint = (payload) => ({
  type: GET_COIN,
  payload,
});
