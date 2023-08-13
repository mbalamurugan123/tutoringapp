import React, { useState } from 'react';
import './styles/Login.css';
import { Link } from "react-router-dom";
import { firebase } from "../config";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginUser(email, password);
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className=" btn-primary1">Login</button>
        </form>
        <p className="register-link1" id='reg-link'><Link to="/StudentRegister">Create an Account</Link> </p>
        <p className="register-link2"><Link to="/StudentRegister">Forget Password?</Link> </p>
      </div>
    </div>
  );
}

export default Login;