import React, { Component } from 'react';

import { Button, Form, Header, Grid, Segment } from 'semantic-ui-react'

export default class Register extends Component {
  state = {
    email: "",
    pass: "",
    firstName: "",
    lastName: "",
    error: ""
  };

  changeInputByName = e => {
    let val = e && e.target && e.target.value;
    let name = e && e.target && e.target.id;

    this.setState({
      [name]: val
    })
  };

  registerUser = e => {
    e.preventDefault();

    fetch('https://lab.lectrum.io/redux/api/user/6vf77z4hd5', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.pass,
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "invite": "rtASDLastuev77"
      })})
      .then(response => {
        switch (response.status) {
          case 401:
            localStorage.removeItem("login");
            alert("Wrong credentials");
            break;
          case 400:
          case 200:
            localStorage.setItem("login", this.state.email);
            this.props.history.push("/contacts");
            break;
          default:
            break;
        }
      })
      .catch(data => {
        this.setState({
          error: data.response
        })
      });
  };

  render () {
    return (

    <div className='login-form' style={{ height: '100%' }}>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Register to our App
          </Header>

          <Form size='large' onSubmit={this.registerUser}>
            <Segment stacked>
              <Form.Input
                fluid
                id="lastName"
                onChange={this.changeInputByName}
                required={true}
                placeholder='Last name'
              />
              <Form.Input
                fluid
                id="firstName"
                onChange={this.changeInputByName}
                required={true}
                placeholder='First name'
              />
              <Form.Input
                fluid icon='user'
                id="email"
                onChange={this.changeInputByName}
                required={true}
                iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                id="pass"
                onChange={this.changeInputByName}
                required={true}
              />

              <Button color='teal' fluid size='large'>
                Register
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}