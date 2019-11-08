import React, { Component } from 'react';
import BRBForm from './BRBForm'

class BRBProdwaf extends Component {
  render() {
    const environmentFlag = '5';

    return (
      <div>
        <center><h1 className='Header-color'>BRB PROD WAF</h1></center>
        <BRBForm environmentFlag={environmentFlag}></BRBForm>
      </div>
    );
  }
}

export default BRBProdwaf
