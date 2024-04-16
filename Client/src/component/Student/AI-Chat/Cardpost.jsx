import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa"; // Importing icon for user message
import { MdAndroid } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import {
  Input,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
} from "@material-tailwind/react";
import AdminNav from "../../Admin/AdminNav";
import StudentNav from "../StudentNav";
const ChatForm = () => {
  const Token = useSelector(selectCurrentToken);
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleCloseChat = (e) => {
    // Close the chat when clicking outside the chat window
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = e.target.elements.question.value;
    if (question.trim() === "") return;

    try {
      const response = await axios.post(
        "http://54.237.124.13:8000/AI/chat/",
        { question },
        {
          headers: {
            Authorization: `Token ${Token}`,
          },
        }
      );
      const answer = response.data.answer;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question, sender: "user" },
        { text: answer, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    e.target.elements.question.value = "";
  };

  return (
    <>
      <div
        className=" p-6 rounded-lg h-full shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="mt-4 h-full">
          <div className="flex flex-col mb-4 border h-full border-gray-300 bg-white rounded-lg p-10 overflow-y-auto max-h-96">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 ${
                  message.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                {message.sender === "bot" ? (
                  <MdAndroid className="text-2xl text-gray-200" /> // Bot message icon
                ) : (
                  <FaUser className="text-2xl text-gray-200" /> // User message icon
                )}
                <div
                  className={`${
                    message.sender === "bot"
                      ? "bg-gray-200 text-black"
                      : "bg-indigo-500 text-white"
                  } py-2 px-3 rounded-md inline-block break-words`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex">
            <Input
              type="text"
              name="question"
              placeholder="Type your question here"
              className="flex-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="ml-2 bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Ask
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatForm;
