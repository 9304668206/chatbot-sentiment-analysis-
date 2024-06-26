
import React, { useState } from 'react';
import { analyzeSentiment } from './sentimentAnalysis';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleUserMessage = async () => {
    if (inputText.trim() === '') return;
    const sentiment = await analyzeSentiment(inputText);
    const response = generateResponse(sentiment);
    setMessages([...messages, { text: inputText, type: 'user' }]);
    setMessages([...messages, { text: response, type: 'bot' }]);
    setInputText('');
  };

  const generateResponse = (sentiment) => {
    let response = '';
    switch (sentiment) {
      case 'positive':
        response = "That's great to hear!";
        break;
      case 'negative':
        response = "I'm sorry to hear that. Can I help in any way?";
        break;
      default:
        response = "I see. Is there anything else on your mind?";
        break;
    }
    return response;
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="user-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleUserMessage();
          }}
        />
        <button className="send-btn" onClick={handleUserMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
