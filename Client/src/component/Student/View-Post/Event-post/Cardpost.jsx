import React, { useState } from 'react';
import axios from 'axios';

const ChatForm = () => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = e.target.elements.question.value;
    if (question.trim() === '') return;

    try {
      const response = await axios.post(
        'http://54.237.124.13:8000/AI/chat',
        { question },
        {
          headers: {
            Authorization: `Token fb8d756a0b5814f5620ec679633d2baa0882e483`,
          },
        }
      );
      const answer = response.data.answer;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question, sender: 'user' },
        { text: answer, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
    e.target.elements.question.value = '';
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div
          className="p-4 space-y-2 overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 200px)' }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === 'bot' ? 'text-left' : 'text-right'
              }`}
            >
              <div
                className={`${
                  message.sender === 'bot'
                    ? 'bg-gray-200 text-black'
                    : 'bg-indigo-500 text-white'
                } py-2 px-3 rounded-md inline-block max-w-md break-words`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <input
            type="text"
            name="question"
            placeholder="Type your question here"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
