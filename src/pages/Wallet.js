import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Wallet extends Component {
  componentDidMount() {
    const notify = () => {
      toast('Hello');
    };
    return notify();
  }

  render() {
    return <p> teste </p>;
  }
}

export default Wallet;
