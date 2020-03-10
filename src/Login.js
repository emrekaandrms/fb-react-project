import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import "./App.css"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert("Girilen mail adresi ile şifre uyuşmamaktadır. Lütfen tekrar deneyiniz!");
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container card ">
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
        <label><b>
          Mail Adresi Giriniz:</b>
          <input name="email" className="form-control" type="email" placeholder="test@infomail.com" />
        </label>
        </div>
        <div className="form-group">
        <label>
        <b>
          Şifrenizi Giriniz:</b>
          <input name="password" className="form-control" type="password" placeholder="123456" />
        </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
