import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase';

class PasswordForget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { email } = this.state;
        firebase.auth().sendPasswordResetEmail(email)
        .then((user) => {
            console.log(user);
            this.state = {
                email: '',
                error: ''
            };
        })
        .catch(error => {
            console.log(error);
            this.setState({ error });
        });
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const { email, error } = this.state;
        return(
            <>
                {error && <p>{error.message}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <input
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email Address"
                        />
                    </div>                
                    <div className="">
                        <button type="submit" className="btn btn-primary">Reset My Password</button>
                    </div>                
                </form>
            </>
        );
    }
}

export default withRouter(PasswordForget);