import React from "react";
import * as ClientOAuth2 from "client-oauth2";
import {
  clientId,
  clientSecret,
  wellknown,
  scopes,
  rejectUnauthorized
} from "./config.json";
import Axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
      name: "",
      loading: true
    };
    this.axios = Axios.default;
    this.checkLogin = this.checkLogin.bind(this);
    console.log(window.location.origin);
    
  }
  axios;

  componentDidMount() {
    return this.checkLogin().then(() => {
      return;
    });
  }
  logout() {}
  render() {
    let data;
    if (this.state.loading) {
      data = (
        <div>
          <br />
          Loading......
        </div>
      );
    } else {
      data = (
        <div>
          <br />
          Logged in User address: {this.state.name}
        </div>
      );
    }
    return <div>{data}</div>;
  }

  async checkLogin() {
    const openidConfig = await this.axios.get(wellknown);
    const auth = new ClientOAuth2({
      clientId,
      clientSecret,
      accessTokenUri: openidConfig.data.token_endpoint,
      authorizationUri: openidConfig.data.authorization_endpoint,
      redirectUri: `${window.location.origin}/login`,
      scopes,
      rejectUnauthorized
    });
    const user = await auth.code.getToken(`${window.location.href}}`);
    const base64Url = user.accessToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const { user_name } = JSON.parse(
      decodeURIComponent(
        atob(base64)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      )
    );
    this.setState({
      name: user_name,
      loading: false
    });
    console.log(user_name);
  }
}
export default Login;
