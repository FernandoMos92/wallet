import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Thead } from '../../style/styledComponents';
import '../../style/table.css';

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
              <td className="row-data">{el.description}</td>
              <td className="row-data">{el.tag}</td>
              <td className="row-data">{el.method}</td>
              <td className="row-data">{el.value}</td>
              <td className="row-data main-coin">
                {el.exchangeRates[el.currency].name}
              </td>
              <td className="row-data">
                {(Number(el.exchangeRates[el.currency].ask)).toFixed(2)}
              </td>
              <td className="row-data">
                {(el.exchangeRates[el.currency].ask * el.value).toFixed(2)}
              </td>
              <td className="row-data coin-conversion">Real</td>
              <td>
                <button type="submit"> Excluir </button>
              </td>
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
