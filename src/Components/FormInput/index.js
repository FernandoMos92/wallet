import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormCur } from '../../style/styledComponents';
import { apiThunk } from '../../actions';
import requestApi from '../../services';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'BTC',
      method: 'Dinheiro',
      tag: 'Alimentacao',
    };

    this.handleData = this.handleData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestAPI();
  }

  requestAPI() {
    requestApi();
  }

  handleData({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { state: { value, description, currency, method, tag },
      props: { returnApi, expenses } } = this;
    const id = expenses.length;
    const obj = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    returnApi(obj);
    this.setState({
      value: '',
      description: '',
      currency: 'BTC',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const {
      state: {
        value,
        description,
        currency,
        method,
        tag,
      },
      props: { currencies },
      handleClick,
      handleData } = this;
    return (
      <FormCur>
        <label htmlFor="value-input">
          Valor:
          <input
            name="value"
            value={ value }
            data-testid="value-input"
            type="number"
            onChange={ handleData }
          />
        </label>

        <label htmlFor="description-input">
          Descrição despesas:
          <input
            name="description"
            value={ description }
            data-testid="description-input"
            type="text"
            onChange={ handleData }
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            id="currency-input"
            name="currency"
            value={ currency }
            data-testid="currency-input"
            type="select"
            onChange={ handleData }
          >
            { currencies.map((coin, index) => (
              <option
                value={ coin }
                key={ index }
              >
                {coin}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            id="method-input"
            name="method"
            value={ method }
            data-testid="method-input"
            type="select"
            onChange={ handleData }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tag:
          <select
            id="tag-input"
            data-testid="tag-input"
            name="tag"
            value={ tag }
            type="select"
            onChange={ handleData }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ () => handleClick() }
        >
          Adicionar despesa
        </button>
      </FormCur>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  returnApi: (objt) => dispatch(apiThunk(objt)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);

FormInput.propTypes = {
  currencies: PropTypes.arrayOf([]).isRequired,
  returnApi: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })).isRequired,
};
