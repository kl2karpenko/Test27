import React, { Component } from 'react';

import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';

// import './styles/main.css';

import { Container, Menu } from 'semantic-ui-react'

import Login from './pages/login/Index';
import Contacts from './pages/contacts/Index';
import NotFound from './pages/not_found/Index';
import Register from './pages/register/Index';

const Home = () => {
  return "Home";
};

const NavigationList = {
  login: {
    url: "/login",
    name: "Log in"
  },
  registration: {
    url: "/register",
    name: "Sign Up"
  },
};

let activeLinkStyle = {
  background: "#333",
  color: "#fff"
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Menu>
            {Object.keys(NavigationList).map(navKeyName => {
              let item = NavigationList[navKeyName];

              return <Menu.Item
                name={item.name}
                key={item.name}
              >
                <NavLink className="nav-link"
                         style={{ color: "#bbb" }}
                   activeStyle={{ color: '#333', textDecoration: 'underline' }}
                   activeClassName={"active"} to={item.url}>{item.name}
                   </NavLink>
              </Menu.Item>
            })}
          </Menu>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/contacts' component={Contacts} />
            <Route path='*' component={NotFound}/>
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
