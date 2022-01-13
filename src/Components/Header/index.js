import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BsCheckAll } from 'react-icons/bs';
import styled from 'styled-components';
import TrybeImage from '../../image/Trybe_logo-baixa.png';

const Hder = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkgray;
`;

const Img = styled.img`
  width: 20%;
  padding: 25px;
`;

const Span = styled.span`
margin: 0 10px;
`;

const BRL = styled.span`
margin: 0 7px;
font-weight: 700;
`;

class Header extends Component {
  render() {
    const { props: { email } } = this;
    return (
      <Hder>
        <Img src={ TrybeImage } alt="Trybe Logo" />
        <div>
          Email:
          <Span data-testid="email-field">{ email }</Span>
          <BsCheckAll style={ { fontSize: 24, color: 'green' } } />
        </div>
        <div>
          Despesas Total: R$
          <span data-testid="total-field">0,00</span>
          <BRL data-testid="header-currency-field">BRL</BRL>
        </div>
      </Hder>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
