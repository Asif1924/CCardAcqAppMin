import React, { Component } from 'react';
import BRBForm from './BRBForm'

class BRBPrep extends Component {
  render() {
    const environmentFlag = '2';

    return (
      <div>
        <center><h1>BRB Preprod</h1></center>
        <BRBForm environmentFlag={environmentFlag}></BRBForm>
      </div>
    );
  }
}

export default BRBPrep
