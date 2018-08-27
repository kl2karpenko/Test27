import React, { Component } from 'react';

import { Button, Checkbox, Form, Header, Image, Message, Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
  state = {
    email: "",
    pass: ""
  };

  changeEmail = e => {
    let val = e && e.target && e.target.value;

    this.setState({
      email: val
    })
  };

  changePass = e => {
    let val = e && e.target && e.target.value;

    this.setState({
      pass: val
    })
  };

  registerUser = e => {
    e.preventDefault();

    fetch('https://lab.lectrum.io/redux/api/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.pass
      })})
      .then(response => {
        switch (response.status) {
          case 401:
            alert("Wrong credentials");
            localStorage.removeItem("login");
            break;
          case 200:
            localStorage.setItem("login", this.state.email);
            this.props.history.replace("/contacts");
            break;
          default:
            break;
        }
      })
      .then(data => this.setState({ data }));
  };

  render () {
    return (
      <div className='login-form' style={{ height: '100%' }}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>

            <Form size='large' onSubmit={this.registerUser}>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  id="email"
                  onChange={this.changeEmail}
                  required={true}
                  iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  id="pass"
                  onChange={this.changePass}
                  required={true}
                />

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <NavLink to='/register'>Sign Up</NavLink>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}