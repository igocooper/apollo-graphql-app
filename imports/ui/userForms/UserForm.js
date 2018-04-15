import React, { Component, Fragment } from 'react'

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default class UserForm extends Component {
  state = {
    login: true
  }

  render() {

    const { data, client } = this.props;

    if (data.user._id) {
      return (
        <button 
        onClick={() => {
          Meteor.logout();
          client.resetStore();  
        }}>
          LogOut
        </button>
      )
    }
    return (
        <Fragment>
          {this.state.login ? (
            <LoginForm client={client}/>
            
          ) : 
          (
            <RegisterForm client={client}/>
          )}
          <button 
            onClick={ () => this.setState({
              login: !this.state.login
            })}
          >
            {this.state.login ? 'Register' : 'Login'}
          </button>
          
        </Fragment>
    )
  }
}
