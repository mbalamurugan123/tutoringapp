import React from "react";

import './styles/MainPage.css';

import Courses from "./courses";
import Footer from "./footer";

import img1 from "./images/img1.webp"
import img2 from "./images/img2.jpeg"
import img3 from "./images/img3.webp"
import img4 from "./images/img4.webp"
import Navbar from "./Navbar";
import Chatbot from "./Chatbot";
import { useSelector } from 'react-redux';
import { useState,useEffect } from "react";

function MainPage(){  
  const [slideIndex, setSlideIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const user=useSelector(state => state.user.value)
  


  return(
   
    <div className="main-body">
      <Navbar />
     <div className="upper-part">
      <div className="slogan-text">
      
        <p className="slgo">Hi , {user.name}<br></br>
        Your successful online training journey begins here</p>
      </div>
     <div className="slideshow-container">
      <div className="mySlides fade" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
    
        <img src={img1} className="slide-img" style={{ width: '50%'  }} />
        
      </div>
      <div className="mySlides fade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>

        <img src={img2} className="slide-img" style={{ width: '50%' }}  />
        
      </div>
      <div className="mySlides fade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>

        <img src={img3} className="slide-img" style={{ width: '50%' }}  />
      </div>
      <div className="mySlides fade" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>

        <img src={img4} className="slide-img" style={{ width: '50%' }}  />
      </div>
    </div>
           
     </div>
     <Courses />
     <Chatbot />
     <Footer />
    </div>
  );
}
export default MainPage