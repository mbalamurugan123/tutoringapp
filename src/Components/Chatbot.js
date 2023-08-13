import React, { useState } from 'react';
// import axios from 'axios';
import chatlogo from './images/chatlogo.png';
import './styles/Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  let x=0;
  const open=()=>{
    if(x==0){
      
      document.getElementById("chat-box").style.width = "400px";
      document.getElementById("chat-box").style.height = "500px";
      x++;
    }
    else{
      
      document.getElementById("chat-box").style.width = "0";
      document.getElementById("chat-box").style.height = "0";
    }
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    // if (inputText.trim() !== '') {
    //   // Send user message to Flask API
    //   const response = await axios.get('http://127.0.0.1:5000/get', {
    //     params: {
    //       msg: inputText,
    //     },
    //   });
      
    //   const botMessage = response.data;
      
    //   setMessages([...messages, { text: inputText, user: true }, { text: botMessage, user: false }]);
    //   setInputText('');
    // }
    
  };

    return (
      
    <div className='chat-logo'>
<div className='chat-box' id='chat-box'>
        <div className='messages-container'>
          <div className='message-dummy'>
            Hey ! It's me JARVIS :)
          </div>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className='input-container'>

        <input
          type='text'
          className='chat-input'
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
        <button type='button' className='chat-btn' onClick={handleSubmit}>
          Send
        </button>
      </div>
      </div>
      <span onClick={open}>
        <img className='logo' src={chatlogo} alt='Chat Logo' />
      </span>
    </div>
  );

}

export default Chatbot;
