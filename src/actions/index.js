export const LOGIN_USER = 'LOGIN_USER';

export const userLogin = (email) => ({
  type: LOGIN_USER,
  payload: email,
});
