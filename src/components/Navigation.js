import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import PasswordForget from './PasswordForget';
import ProtectedRoute from './ProtectedRoute';
import firebase from 'firebase';

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
            <div className="nav pt-4 pb-4">
              <NavLink to="/">Home</NavLink>
              {this.props.authenticated ? (
                <span>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <NavLink to="" onClick={logOutUser}>Log Out</NavLink>
                </span>
              ) : (
                <span>
                  <NavLink to="/login">Login</NavLink>                 
                  <NavLink to="/register">Register</NavLink>
                </span>
              )}
            </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route authenticated={this.props.authenticated} path="/login" component={Login} />
            <Route path="/fg-password" component={PasswordForget} />
            <Route path="/register" component={Register} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function logOutUser() {
  firebase.auth().signOut();
}

export default Navigation;
