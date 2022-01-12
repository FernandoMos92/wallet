import React from 'react';
import Main from '../style/styledComponents';
import Money from '../image/undraw_wallet_aym5.svg';
import '../style/login.css';

class Login extends React.Component {
  render() {
    return (
      <Main>
        <form>
          <label htmlFor="inputEmail">
            <input
              type="text"
              id="inputEmail"
              data-testid="email-input"
              placeholder="Email"
            />
          </label>
          <label htmlFor="inputPassword">
            <input
              placeholder="Password"
              type="password"
              id="inputPassword"
              data-testid="password-input"
            />
          </label>
          <div className="container-remember">
            <label htmlFor="input-remember">
              Lembre de mim?
              <input
                type="checkbox"
                className="input-remember"
                id="input-remember"
              />
            </label>
          </div>
          <button type="submit"> Entrar </button>
        </form>
        <img src={ Money } alt="You wallet login" />
      </Main>
    );
  }
}

export default Login;
