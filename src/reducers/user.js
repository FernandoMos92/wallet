const LOGIN_USER = 'LOGIN_USER';

const userLogin = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export default userLogin;
