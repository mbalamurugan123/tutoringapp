// FeedbackPopup.js
// import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import './styles/Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
 
  

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
