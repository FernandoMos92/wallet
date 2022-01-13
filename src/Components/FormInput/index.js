import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormCur } from '../../style/styledComponents';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleData = this.handleData.bind(this);
  }

  handleData({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const {
      state: {
        id,
        value,
        description,
        currency,
        method,
        tag,
      }, handleData } = this;
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
            name="currency"
            value={ currency }
            data-testid="currency-input"
            type="select"
            onChange={ handleData }
          >
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
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
            name="tag"
            value={ tag }
            data-testid="tag-input"
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
        >
          Adicionar despesa
        </button>
      </FormCur>
    );
  }
}

export default connect()(FormInput);
