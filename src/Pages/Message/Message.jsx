import React, { useState } from 'react';

function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="message-page h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-400">
      <h1 className="text-3xl font-bold text-white mb-6">Send a Message</h1>
      {/* <div className="message-container max-w-lg bg-white rounded-lg shadow-md p-4 overflow-y-scroll mb-6">
        {messages.map((message, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-3 mb-2">{message}</div>
        ))}
      </div> */}
      <div className="input-container flex justify-between w-full max-w-lg">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-gray-300 rounded-l p-3 flex-grow focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-r focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessagePage;
