// FeedbackPopup.js
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import './styles/Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
 
  const pass=localStorage.getItem('password');
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      email: `${pass}`,
      feedback: feedback,

    };

   
    axios.post('http://localhost:8082/api/v1/feed/addFeedback', dataToSend)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      // window.location.reload();
      alert("Your Feedback is submited");
  };


  return (
    <div className="feedback-popup">
      <div className="feedback-container" >
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea 
            placeholder="Enter your feedback..." value={feedback} onChange={(e)=>setFeedback(e.target.value)}
          />
          <div className="button-container">
            <button type="submit" className='feed-btn'>Submit</button>
            <button className='feed-btn'>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
