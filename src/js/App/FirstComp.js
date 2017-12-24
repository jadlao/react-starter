import React, { Component } from 'react';

export default class FirstComp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'josef'
    };
  }
  render() {
    return (
      <section className="col-md-12">
        <p>First component</p>
      </section>
    );
  }
}
