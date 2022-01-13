import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';

toast.configure();

class Wallet extends Component {
  componentDidMount() {
    const notify = () => {
      toast.success('Bem-vindo!!');
    };
    return notify();
  }

  render() {
    return <Header> teste </Header>;
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
