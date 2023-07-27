import React, { useState } from 'react';
import './styles/Login.css';
import { Link, Navigate, json } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import axios from 'axios';
  
import { useDispatch } from 'react-redux';
import { login } from '../user';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pname, setPname] = useState('');
  const dispatch = useDispatch();

  const validateEmail = (email) => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    return pattern.test(email);
  }
  const navigate = useNavigate();

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8181/api/v1/auth/authenticate", { email, password });
      const token = response.data.token;
      const user = response.data.userResponse;

      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('username', email);
      
      navigate('/main');
    } catch (error) {
      console.error("Error:  ", error);
      alert("Password is Incorrect");
    }
    setEmailError('');
  }
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary1" onClick={() => dispatch(login({ name: email }))}>
            Login
          </button>
        </form>
        <p className="register-link1" id='reg-link'>
          <Link to="/Regester">Create an Account</Link>
        </p>
        <p className="register-link2">
          <Link to="/Regester">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
