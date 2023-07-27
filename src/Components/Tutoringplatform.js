// src/components/TutoringPlatform.js
import React from 'react';
import './styles/Tutoringplatform.css';

const TutoringPlatform = () => {
  return (
    <div className="tutoring-platform">
      <header className="header">Live Sessions</header>

      {/* Video Conferencing */}
      <div className="video-conferencing">
        {/* Add video conferencing component here */}
        <div className="video-box">Video Conferencing</div>
      </div>

      {/* Chat Messaging */}
      <div className="chat-messaging">
        {/* Add chat messaging component here */}
        <div className="chat-box">Chat Messaging</div>
      </div>

      {/* Collaborative Whiteboard */}
      <div className="collaborative-whiteboard">
        {/* Add collaborative whiteboard component here */}
        <div className="whiteboard">Collaborative Whiteboard</div>
      </div>

      {/* File Sharing */}
      <div className="file-sharing">
        {/* Add file sharing component here */}
        <div className="file-box">File Sharing</div>
      </div>

      {/* Screen Sharing */}
      <div className="screen-sharing">
        {/* Add screen sharing component here */}
        <div className="screen-box">Screen Sharing</div>
      </div>
    </div>
  );
};

export default TutoringPlatform;
