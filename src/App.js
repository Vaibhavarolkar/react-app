import React, { Component } from 'react';
import Navigation from './components/Navigation';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
 state = {
   authenticated: false,
 };
 componentDidMount() {
   firebase.auth().onAuthStateChanged((authenticated) => {
     authenticated
       ? this.setState(() => ({
           authenticated: true,
         }))
       : this.setState(() => ({
           authenticated: false,
         }));
   });
 }
 render() {
   return (
    <div className="container">
      <Navigation authenticated={this.state.authenticated} />
    </div>
   );
 }
}
export default App;