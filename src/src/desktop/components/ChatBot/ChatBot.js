// ChatBot.js

import React, { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ChatBot.css';
import ChatBotIcon from './text.png';
import ChatBotLogo from './ChatBotLogo.png';
import popSound from './popup.mp3';

const ChatBot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const chatboxRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (showChatbot) {
      inputRef.current.focus();
      if (firstTime) {
        setTimeout(() => {
          handleBotMessage('Hi there! I am SAM (Smart Assist Manager). How can I assist you today?');
          playPopSound(); // Play the sound effect
          setFirstTime(false);
        }, 2000);
      }
    }
  }, [showChatbot, firstTime]);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  const handleUserMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, type: 'user' }]);
    // Simulate a delayed response from the chatbot
    setTimeout(() => {
      handleBotMessage('I am a Beta Version Bot');
      playPopSound(); // Play the sound effect
      // Scroll to the bottom of the chatbox
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, 1000);
  };

  const handleBotMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, type: 'bot' }]);
  };

  const playPopSound = () => {
    const audio = new Audio(popSound);
    audio.play();
  };

  return (
    <div className={`chatbot-container ${showChatbot ? 'show-chatbot' : ''}`}>
      {showChatbot && (
        <div className="chatbot">
          <div className="chat-header">
            <div className="chatbot-logo-container">
              <img src={ChatBotLogo} alt="Chatbot Logo" className="chatbot-logo" />
            </div>
            <h2>Chatbot</h2>
          </div>
          <div ref={chatboxRef} className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUserMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
            <button onClick={() => inputRef.current && handleUserMessage(inputRef.current.value)}>
              Send
            </button>
          </div>
        </div>
      )}
      {showChatbot ? (
        <button className="chatbot-close-icon" onClick={toggleChatbot}>
          <FaTimes />
        </button>
      ) : (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          <img src={ChatBotIcon} alt="Chatbot" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
