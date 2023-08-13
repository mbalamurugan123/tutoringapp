import React, { useState } from 'react';
import './styles/TeacherRegister.css';
import { useDispatch } from 'react-redux';
import { login } from '../user';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { firebase } from '../config';

import axios from 'axios';
function StudentRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const registerUser = async (email, password, name) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      
      if (currentUser) {
        await currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://schoolapp-4f272.firebaseapp.com',
        });
        
        alert('Verification email sent');

        await firebase.firestore().collection('users')
          .doc(currentUser.uid)
          .set({
            name,
            email,
          });
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <form className='form__body'>
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input className="form-control" type="text" value={name}  onChange={(e) => setName(e.target.value)} id="firstName" placeholder=""/>
          </div>
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input  type="text" id="exp" className="form-control" placeholder="" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input  type="password" id="exp" className="form-control"  placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
         
            <button onClick={() => registerUser(email, password, name)} type="submit" className="btn-primary1"><Link to="/">Register</Link></button>
   
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;
