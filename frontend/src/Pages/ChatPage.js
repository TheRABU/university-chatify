import axios from "axios";
import { useEffect, useState } from "react";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const loadChatData = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };
  useEffect(() => {
    loadChatData();
  }, []);

  return (
    <>
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>ChatNames : {chat.chatName}</div>
        ))}
      </div>
      ;
    </>
  );
};

export default ChatPage;
