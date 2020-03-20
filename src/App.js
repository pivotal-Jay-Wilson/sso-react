import React from 'react'
import * as ClientOAuth2 from "client-oauth2";
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { clientId, clientSecret, wellknown, scopes, rejectUnauthorized } from './config.json';

class App extends React.Component {
    axios;
    constructor(props) {
        super(props);
        this.axios = Axios.default;
        this.login = this.login.bind(this);
        console.log(window.location);
        
    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={this.login}>
      Login
    </button>
         </header>
        </div>
      );
  }
  async login(){
    const openidConfig = await this.axios.get(wellknown);
    const auth = new ClientOAuth2({
      clientId,
      clientSecret,
      accessTokenUri: openidConfig.data.token_endpoint,
      authorizationUri: openidConfig.data.authorization_endpoint,
      redirectUri: `${window.location.href}login`,
      scopes,
      rejectUnauthorized
    });
    window.open(auth.code.getUri(),"_self");
 }

}
export default App