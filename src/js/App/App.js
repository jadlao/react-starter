import '../../sass/main.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FirstComp from './FirstComp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'josef'
    };
    // method bindings go here
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <FirstComp />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
