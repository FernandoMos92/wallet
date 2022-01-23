import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Thead } from '../../style/styledComponents';
import '../../style/table.css';
import { deleteExpenses } from '../../actions';

const Sbutton = styled.button`
  background-color: rgb(211, 211, 211);
  color: rgb(0, 0, 0);
  font-weight: 800;
  width: 100%;
  height: 60px;
  border: 1px solid rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`;

class TableSpent extends Component {
  constructor(props) {
    super(props);
    this.handleDelte = this.handleDelte.bind(this);
  }

  handleDelte({ target }) {
    const { deleteDispatch } = this.props;
    deleteDispatch(target.id);
  }

  render() {
    const { walletData } = this.props;
    const { handleDelte } = this;
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
          { walletData.map((el, index) => (
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
                <Sbutton
                  data-testid="delete-btn"
                  id={ index }
                  type="button"
                  onClick={ handleDelte }
                >
                  Excluir
                </Sbutton>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (id) => dispatch(deleteExpenses(id)),
});

const mapStateToProps = (state) => ({
  walletData: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableSpent);

TableSpent.propTypes = {
  walletData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })).isRequired,
  deleteDispatch: PropTypes.func.isRequired,
};
