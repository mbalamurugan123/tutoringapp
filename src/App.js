import './App.css';
import StudentRegester from './Components/StudentRegester';
import Login from './Components/Login';
import {Routes,Route} from "react-router-dom";
// import { AuthProvider } from './Components/context/AuthContex';
import {firebase} from './config';
import { useState,useEffect } from 'react';
import MainPage from './Components/MainPage';
// import SignInSignUpPage from './Components/demo';
import Sidenav from './Components/sidebar';
import { Dashboard } from '@mui/icons-material';
// import SignInSignUpPage from './Components/demo';
import DashBoard from './Components/dashboad';
import Details1 from './Components/details';
import ClassBtn from './Components/ClassBtn';
import PaymentPage from './Components/PaymentPage';
import UserList from './Components/demo';
import TutoringPlatform from './Components/Tutoringplatform';
import About from './Components/About';
function App() {
  const [initializing,setInitializing] =useState(true);

  const [user,setUser]=useState();
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect(()=>{
    const subscriber =firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);
  if(initializing) return null;
  if(!user){
    return(
      <Routes>

      <Route path="/" element={<Login/>}></Route>
      <Route path="/StudentRegister" element={<StudentRegester/>}></Route>
     
      </Routes>
    );
  }
  return (
    <div className="App">

      <Routes>
      {/* <AuthProvider> */}
      <Route path='/' element={<MainPage/>}></Route>
      
      <Route path='/main' element={<MainPage/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/dash' element={<DashBoard/>}></Route>
      <Route path='/details1' element={<Details1/>}></Route>
      <Route path='/class' element={<ClassBtn/>}></Route>
      <Route path='/PaymentPage' element={<PaymentPage/>}></Route>
      <Route path='/sidenav' element={<Sidenav/>}></Route>
      <Route path='/demo' element={<UserList/>}></Route>
      <Route path='/tutoringplatform' element={<TutoringPlatform/>}></Route>
      {/* </AuthProvider> */}

      </Routes>
    </div>
  );
}

export default App;