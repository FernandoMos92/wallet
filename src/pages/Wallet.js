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
      id: 0,
      spent: 0,
      description: '',
      currencyCoin: '',
      methodPag: '',
      tag: '',
    };

    this.saveInfo = this.saveInfo.bind(this);
  }

  componentDidMount() {
    const notify = () => {
      toast.success('Bem-vindo!!');
    };
    return notify();
  }

  saveInfo({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { saveInfo, state: {
      id,
      spent,
      description,
      currencyCoin,
      methodPag,
      tag } } = this;
    console.log(this);
    return (
      <div>
        <Header />
        <FormInput saveInfo={ saveInfo } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
