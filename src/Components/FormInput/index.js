import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormCur } from '../../style/styledComponents';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      spent: 0,
      description: '',
      currencyCoin: '',
      methodPag: '',
      tag: '',
    };

    this.saveInfo = this.saveInfo.bind(this);
  }

  saveInfo({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { saveInfo } = this;
    return (
      <FormCur>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
          />
        </label>
        <label htmlFor="description-input">
          Descrição despesas:
          <input
            data-testid="description-input"
            type="text"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            data-testid="currency-input"
            type="select"
          >
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            type="select"
          >
            <option value="Din">Dinheiro</option>
            <option value="C/C">Cartão de crédito</option>
            <option value="C/D">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag:
          <select
            data-testid="tag-input"
            type="select"
          >
            <option value="Alime">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="trab">Trabalho</option>
            <option value="Trans">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => saveInfo() }
        >
          Adicionar despesa
        </button>
      </FormCur>
    );
  }
}

export default connect()(FormInput);
