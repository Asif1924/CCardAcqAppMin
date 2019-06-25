import React, { Component } from 'react';
import BRBForm from './BRBForm'

class BRBDev extends Component {
  render() {
    const environmentFlag = '1';

    return (
      <div>
        <center><h1>BRB Development</h1></center>
        <BRBForm environmentFlag={environmentFlag}></BRBForm>
      </div>
    );
  }
}

export default BRBDev
