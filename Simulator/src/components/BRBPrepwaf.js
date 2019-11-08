import React, { Component } from 'react';
import BRBForm from './BRBForm'

class BRBPrepwaf extends Component {
  render() {
    const environmentFlag = '3';

    return (
      <div>
        <center><h1>BRB Preprod WAF</h1></center>
        <BRBForm environmentFlag={environmentFlag}></BRBForm>
      </div>
    );
  }
}

export default BRBPrepwaf

