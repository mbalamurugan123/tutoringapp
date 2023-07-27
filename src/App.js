
import './App.css';
import StudentRegester from './Components/StudentRegester';
import TeacherRegester from './Components/TeacherRegester';
import Regester from './Components/Regester';
import Login from './Components/Login';
import About from './Components/About';
import {Routes,Route} from "react-router-dom";
// import { AuthProvider } from './Components/context/AuthContex';
import {firebase} from './config';
import { useState,useEffect } from 'react';
import MainPage from './Components/MainPage';
import Sidenav from './Components/sidebar';
import { Dashboard } from '@mui/icons-material';
// import SignInSignUpPage from './Components/demo';
import DashBoard from './Components/dashboad';
import Details1 from './Components/details';
import ClassBtn from './Components/ClassBtn';
import PaymentPage from './Components/PaymentPage';
import UserList from './Components/demo';
import TutoringPlatform from './Components/Tutoringplatform';
function App() {
    return(
      <div>

      <Routes>

      <Route path="/" element={<Login/>}></Route>
      <Route path="/Regester" element={<Regester/>}></Route>
      <Route path="/TeacherRegister" element={<TeacherRegester/>}></Route>
      <Route path="/StudentRegister" element={<StudentRegester/>}></Route>
     
     
      <Route path='/main' element={<MainPage/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/dash' element={<DashBoard/>}></Route>
      <Route path='/details1' element={<Details1/>}></Route>
      <Route path='/class' element={<ClassBtn/>}></Route>
      <Route path='/PaymentPage' element={<PaymentPage/>}></Route>
      <Route path='/sidenav' element={<Sidenav/>}></Route>
      <Route path='/demo' element={<UserList/>}></Route>
      <Route path='/tutoringplatform' element={<TutoringPlatform/>}></Route>
      </Routes>
      
      </div>

  );
}

export default App;
