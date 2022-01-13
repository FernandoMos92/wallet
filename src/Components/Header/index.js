import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BsCheckAll } from 'react-icons/bs';
import TrybeImage from '../../image/Trybe_logo-baixa.png';
import { Hder, Img, Span, BRL } from '../../style/styledComponents';

class Header extends Component {
  constructor() {
    super();

    this.amountValue = this.amountValue.bind(this);
  }

  amountValue() {
    const { wallet } = this.props;
    if (wallet.length === 0) return 0;
    const totalValue = wallet.reduce((acc, current) => {
      acc += current.value * current.exchangeRates[current.currency].ask;
      return acc;
    }, 0).toFixed(2);
    return totalValue;
  }

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
          <span
            data-testid="total-field"
          >
            { this.amountValue() }
          </span>
          <BRL data-testid="header-currency-field">BRL</BRL>
        </div>
      </Hder>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  wallet: PropTypes.arrayOf(Object).isRequired,
};
