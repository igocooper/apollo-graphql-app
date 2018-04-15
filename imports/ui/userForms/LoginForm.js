import React, { Component } from 'react';
import { format } from 'url';


class LoginForm extends Component {
    login = (e) => {
        e.preventDefault();
        const { client } = this.props;
        
        Meteor.loginWithPassword(this.email.value, this.password.value, (error) => {
           if (error) return console.error(error);     
           client.resetStore();
        });
    }

    render() {
        return (
           <form onSubmit={this.login}>
            <fieldset>
                <legend>User Login Form:</legend>
                Email: <input type="email" ref= {(input) => this.email = input} /><br/>
                Password: <input type="password" ref= {(input) => this.password = input} /><br/>
                <button type="submit">Login User</button>
            </fieldset>
           </form> 
        );
    }
}

export default LoginForm;