import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Thead = styled.th`
  font-size: 15px;
  border: 2px solid black;
  padding: 5px;
`;

class TableSpent extends Component {
  render() {
    const { walletData } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <Thead>Descrição</Thead>
            <Thead>Tag</Thead>
            <Thead>Método de pagamento</Thead>
            <Thead>Valor</Thead>
            <Thead>Moeda</Thead>
            <Thead>Câmbio utilizado</Thead>
            <Thead>Valor convertido</Thead>
            <Thead>Moeda de conversão</Thead>
            <Thead>Editar/Excluir</Thead>
          </tr>
        </thead>
        <tbody>
          { walletData.map((el) => (
            <tr key={ el.id }>
              <td>{el.description}</td>
              <td>{el.tag}</td>
              <td>{el.method}</td>
              <td>{el.value}</td>
              <td>{el.exchangeRates[el.currency].name}</td>
              <td>{(Number(el.exchangeRates[el.currency].ask)).toFixed(2)}</td>
              <td>{(el.exchangeRates[el.currency].ask * el.value).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  walletData: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableSpent);

TableSpent.propTypes = {
  walletData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })).isRequired,
};
