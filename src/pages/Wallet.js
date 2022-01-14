import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';
import FormInput from '../Components/FormInput';
import TableSpent from '../Components/TableSpent';

toast.configure();

class Wallet extends Component {
  componentDidMount() {
    const notify = () => {
      toast.success('Bem-vindo!!');
    };
    return notify();
  }

  render() {
    return (
      <div>
        <Header />
        <FormInput />
        <TableSpent />
      </div>
    );
  }
}

export default Wallet;
