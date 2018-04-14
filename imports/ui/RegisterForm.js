import React, { Component } from 'react';
import { format } from 'url';
import { Accounts } from 'meteor/accounts-base';

class RegisterForm extends Component {
    registerUser = (e) => {
        e.preventDefault();

        const { client } = this.props;
        Accounts.createUser({
            email: this.email.value,
            password: this.password.value
        }, (error) => {
           if(error) return console.error(error);  

           if (!error) {
            client.resetStore();
           }
        });
    }

    render() {
        return (
           <form onSubmit={this.registerUser}>
            <fieldset>
                <legend>User Registation Form:</legend>
                Email: <input type="email" ref= {(input) => this.email = input} /><br/>
                Password: <input type="password" ref= {(input) => this.password = input} /><br/>
                <button type="submit">Register User</button>
            </fieldset>
           </form> 
        );
    }
}

export default RegisterForm;