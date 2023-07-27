import './styles/Regester.css';
import {Link} from "react-router-dom";

function Register() {
  

  return (
    <div className="reg-container">
      <div className="reg-form">
        <h2>Are you a ...</h2>
        <Link to="/StudentRegister"><button type="submit" className=" btn-pri1">Student </button></Link>
        <Link to="/TeacherRegister"><button type="submit" className=" btn-pri2">Teacher</button></Link> 
      </div>
    </div>
  );
}

export default Register