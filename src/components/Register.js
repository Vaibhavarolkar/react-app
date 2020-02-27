import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase';
class Register extends Component {
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
     .createUserWithEmailAndPassword(email, password)
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
           <h2 className="mb-4">Register</h2>
         </div>
       <div>
         <div>
          {error && <p className="text-danger">{error.message}</p>}
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
             <button className="btn btn-primary">Register</button>
           </form>
         </div>
       </div>
     </div>
   );
 }
}
export default withRouter(Register);