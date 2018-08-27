import React, { Component } from 'react';

export default class Contacts extends Component {
  componentWillMount () {
    if (!localStorage.getItem("login")) {
      this.props.history.replace("/login");
    }
  }

  render () {
    return <h2>Hey You are login</h2>;
  }
}