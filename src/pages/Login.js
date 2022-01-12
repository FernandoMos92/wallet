import React from 'react';
import Main from '../style/styledComponents';
import Money from '../image/undraw_wallet_aym5.svg';
import '../style/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailUser: '',
      password: '',
      rememberMe: false,
      controlBtn: true,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail({ target }) {
    this.setState({ emailUser: target.value });
  }

  handlePassword({ target }) {
    const { controlBtn } = this.state;
    const caracterAmount = target.value.length;
    const minNumber = 6;

    this.setState({ password: target.value }, () => {
      if (caracterAmount >= minNumber) {
        console.log('ENTROU');
        this.setState({ controlBtn: !controlBtn });
      }
    });
  }

  render() {
    const { state: {
      emailUser,
      password,
      rememberMe,
      controlBtn,
    } } = this;

    return (
      <Main>
        <form>
          <label htmlFor="inputEmail">
            <input
              value={ emailUser }
              placeholder="Email"
              type="text"
              id="inputEmail"
              data-testid="email-input"
              onChange={ this.handleEmail }
            />
          </label>
          <label htmlFor="inputPassword">
            <input
              value={ password }
              placeholder="Password"
              type="password"
              id="inputPassword"
              data-testid="password-input"
              onChange={ this.handlePassword }
            />
          </label>
          <div className="container-remember">
            <label htmlFor="input-remember">
              Lembre de mim?
              <input
                type="checkbox"
                checked={ rememberMe }
                className="input-remember"
                id="input-remember"
              />
            </label>
          </div>
          <button
            disabled={ controlBtn }
            type="submit"
            style={ controlBtn ? { color: 'red' } : { color: 'rgb(108,99,255)' } }
          >
            Entrar
          </button>
        </form>
        <img src={ Money } alt="You wallet login" />
      </Main>
    );
  }
}

export default Login;
