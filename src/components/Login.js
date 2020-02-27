import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PasswordForget from './PasswordForget';
import firebase from '../firebase';
class Login extends Component {
 state = {
   email: '',
   password: '',
   error: null,
 };
handleInputChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
handleSubmit = (event) => {
   event.preventDefault();
   const { email, password } = this.state;
firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then((user) => {
       this.props.history.push('/');
     })
     .catch((error) => {
       this.setState({ error: error });
     });
 };
 render() {
   const { email, password, error } = this.state;
   return (
     <div className="">
        <div>
          <h2 className="mb-4">Log In</h2>
        </div>
       {error ? (
           <div>
             <div>{error.message}</div>
           </div>
       ) : null}
         <div>
           <form onSubmit={this.handleSubmit}>
             <div className="form-field">
              <input type="text" name="email" placeholder="Email" className="form-control" value={email} onChange={this.handleInputChange} />
             </div>
             <div className="form-field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>           
            <div className="">
              <button className="btn btn-primary">Log In</button>
            </div>
            <div className="mt-3">
              <NavLink to="/fg-password">Forgot Password?</NavLink>
            </div>
           </form>
         </div>
     </div>
   );
 }
}
export default withRouter(Login);