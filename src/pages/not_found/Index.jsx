import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

let divStyle = {
  color: '#333',
  background: 'transparent',
  fontSize: "20px",
  height: "100%",
  margin: "30px",
  textAlign: "center"
};

export default () => {
  return <div className="notFound" style={divStyle}>
    <h1>
      Sorry, this page was not found.
    </h1>

    <div>
      Try go <NavLink to="/login">here</NavLink>
    </div>
  </div>;
}