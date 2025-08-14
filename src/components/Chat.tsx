/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Chat
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

interface IMessages {
  firstName: string;
  lastName: string;
  text: string;
  photoUrl: string;
  createdAt: string;
  userId: string;
}

const Chat: React.FC = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store: any) => store.user);

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<IMessages[]>([]);

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chats/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg: any) => {
      return {
        firstName: msg?.senderId?.firstName,
        lastName: msg?.senderId?.lastName,
        text: msg?.text,
        photoUrl: msg?.senderId?.photoUrl,
        createdAt: msg?.createdAt,
        userId: msg?.senderId?._id,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!user?._id || !targetUserId) {
      return;
    }

    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user?.firstName,
      userId: user?._id,
      targetUserId,
    });

    socket.on("messageReceived", (data: IMessages) => {
      setMessages((prevMessages) => [...(prevMessages || []), data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [user?._id, targetUserId]);

  const handleSendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user?.firstName,
      lastName: user?.lastName,
      userId: user?._id,
      targetUserId,
      text: newMessage,
      photoUrl: user?.photoUrl,
      createdAt: new Date().toISOString(),
    });
    setNewMessage("");
  };

  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat</h1>
      <div className="flex-1 overflow-scroll p-5">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message?.userId === user?._id ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={message?.photoUrl}
                />
              </div>
            </div>
            <div className="chat-header">
              {`${message?.firstName} ${message?.lastName}`}
              <time className="text-xs opacity-50">
                {new Date(message?.createdAt).toLocaleTimeString()}
              </time>
            </div>
            <div className="chat-bubble">{message?.text}</div>
            <div className="chat-footer opacity-50">
              {new Date(message?.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          className="flex-1 border border-gray-500 text-white rounded p-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
