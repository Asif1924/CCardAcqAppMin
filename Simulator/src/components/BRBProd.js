import React, { Component } from 'react';
import BRBForm from './BRBForm'

class BRBProd extends Component {
  render() {
    const environmentFlag = '4';

    return (
      <div>
        <center><h1 className='Header-color'>BRB PROD</h1></center>
        <BRBForm environmentFlag={environmentFlag}></BRBForm>
      </div>
    );
  }
}

export default BRBProd
