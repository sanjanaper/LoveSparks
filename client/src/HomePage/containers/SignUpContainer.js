import React, { Component } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

import SignUpForm from '../components/SignUp.js';

class SignUpContainer extends Component {

  state = {
    email: 'adm.atlslk@gmail.com',
    login: '',
    password: 'pass123',
    passwordConfirm: 'pass123',
    firstName: 'tharindu',
    lastName: 'perera',
    gender: '',
    // orientation: '',
    birthDate: '30/10/1990',
    auth: false,
  }

  saveState = (name, value) => {
    this.setState({ [name]: value });
  }

  createUser = () => {
    const user = Object.assign({}, this.state);
    const url = '/api/signup';
    axios.post(url, user)
    .then(({ data }) => {
      const { success, message } = data;
      if (success === true) {
        NotificationManager.success(message, 'Success!', 3000);
      } else {
        NotificationManager.error(message, 'Oh...', 3000);
      }
    })
    // eslint-disable-next-line no-console
    .catch(err => console.error('Error: ', err));
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.createUser}
        onChange={this.saveState}
        message={this.state.message}
      />
    );
  }
}

export default SignUpContainer;
