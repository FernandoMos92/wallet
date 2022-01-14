import React, { Component } from 'react';
import styled from 'styled-components';

const TSpent = styled.table`
  
`;

const Tr = styled.tr`
  display: flex;
  flex-grow: 1;
  min-width: 99vw;
`;

const Th = styled.th`
  width: 100%;
  border: 1px groove darkgray;
  background-color: darkgray;
  color: white;
  padding: 10px;
`;

class TableSpent extends Component {
  render() {
    return (
      <TSpent>
        <Tr>
          <Th>Valor</Th>
          <Th>Descrição</Th>
          <Th>Moeda</Th>
          <Th>Método de pagamento</Th>
          <Th>Tag</Th>
          <Th>Câmbio utilizado</Th>
          <Th>Valor convertido</Th>
        </Tr>
      </TSpent>
    );
  }
}

export default TableSpent;
