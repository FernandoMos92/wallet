import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../style/styledComponents';
import * as act from '../actions';
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
    const { controlBtn, emailUser } = this.state;
    const caracterAmount = target.value.length;
    const minNumber = 6;

    const emailContains = '@';
    const emailConts = '.com';
    const result = emailUser.includes(emailContains) && emailUser.includes(emailConts);

    this.setState({ password: target.value }, () => {
      if (caracterAmount >= minNumber && result === true) {
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
    },
    props: {
      loginAdd,
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
          <Link to="/carteira">
            <button
              disabled={ controlBtn }
              type="button"
              style={ controlBtn ? { color: 'red' } : { color: 'rgb(141,208,112' } }
              onClick={ () => loginAdd(emailUser) }
            >
              Entrar
            </button>
          </Link>
        </form>
        <img src={ Money } alt="You wallet login" />
      </Main>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  loginAdd: (inputValue) => dispatch(act.userLogin(inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  loginAdd: PropTypes.func.isRequired,
};
