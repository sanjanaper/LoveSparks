/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'universal-cookie';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../css/nav.css';

class Logout extends Component {

  state = {
    disconnected: false,
  }

  disconnect = () => {
    const url = '/api/logout';
    axios.put(url)
    .then(() => {
      const cookies = new Cookies();
      cookies.remove('access_token', { path: '/' });
      global.socket.disconnect();
      this.setState({ disconnected: true });
    })
    .catch(err => console.error('Error: ', err));
  }

  render() {
    const tooltip = <Tooltip id="nav-logout">Sign out</Tooltip>;
    const { disconnected } = this.state;

    if (disconnected === false) {
      return (
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <button onClick={this.disconnect} to="/" className="fa fa-sign-out" />
          {/* glyphicon glyphicon-off */}
        </OverlayTrigger>
      );
    }
    return <Redirect to="/" />;
  }
}

export default Logout;
