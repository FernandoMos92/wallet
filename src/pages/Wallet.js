import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';
import FormInput from '../Components/FormInput';

toast.configure();

class Wallet extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
