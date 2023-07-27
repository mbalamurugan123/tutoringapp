import React, {useState} from 'react';
import './styles/TeacherRegister.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../user';
function TeacherRegester() {
  const [pname, setPname] = useState('');
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setPname(e.target.value);
  }

   return(
        <div className="register-container">
        <div className="register-form">
          <h2>Teacher Registration</h2>
          <form className='form__body'>
            <div className="group">
              <label htmlFor="email">First Name</label>
              <input className="form__control" type="text" id="firstName" placeholder=""value={pname} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Last Name</label>
              <input  type="text" id="exp" className="form-control"  placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contact</label>
              <input  type="number" id="exp" className="form-control"  placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Experience</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Age</label>
              <input  type="text" id="exp" className="form-control"placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Field</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input  type="text" id="exp" className="form-control"placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
            <Link to='/main'>

            <button type="submit" className=" btn-primary1" onClick={() => dispatch(login({ name: pname }))}>Register</button>
            </Link>
          </form>
          
        </div>
      </div>
       
    )       
}

export default TeacherRegester