import { useState, useEffect } from "react";
import { getFromDatabase, saveToDatabase } from "../../containers/getFromDatabase";

const useChats = (userId) => {
    const [currentChat, setCurrentChat] = useState(null);
    const [myActiveChats, setMyActiveChats] = useState([]);
    const [currentChatMessages, setCurrentChatMessages] = useState([]);

    useEffect(() => {
        getFromDatabase(`/${userId}/chats`, res => {
            setMyActiveChats(Object.keys(res));
        });

        getFromDatabase(`/chats/${currentChat}/messages`, res => {
            setCurrentChatMessages(Object.values(res));
        });
    }, [currentChat, userId]);

    const sendMessage = (chatName, body) => {
        const messageId = uuid();
        saveToDatabase(`/chats/${chatName}/messages/${messageId}`, {
            body, sender: userId, created: new Date().toISOString(),
        })
    };
    
    const createChat = (recipient, chatName) => {
        const fullChatName = `${chatName}-${uuid()}`;
        saveToDatabase(`/${recipient}/chats/${fullChatName}`, fullChatName);
        saveToDatabase(`/${userId}/chats/${fullChatName}`, fullChatName);
        saveToDatabase(`/chats/${fullChatName}/messages`, {});
        setCurrentChat(fullChatName);
    }

    return{
        sendMessage,
        createChat,
        currentChat,
        myActiveChats,
        currentChatMessages,
        setCurrentChat
    };
};

export default useChats;