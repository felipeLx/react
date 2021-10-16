import React from 'react';

import useAuth from '../components/custom/useAuth';
import useChats from '../components/custom/useChats';
import Connect from '../components/connect/Connect';
import ActiveChat from '../components/chatroom/ActiveChat';
import CreateChat from '../components/chatroom/CreateChat';
import ChatWindow from '../components/chatroom/ChatWindow';

const Layout = () => {
    const [userId, users, connect] = useAuth();
    const {
        myActiveChats,
        setCurrentChat,
        createChat,
        sendMessage,
        currentChat,
        currentChatMessages,
    } = useChats(userId);

    return (
        <div className="Layout">
            { !userId ? <Connect connect={connect} /> : (
                <>
                <p style={{ color: 'green' }}>Connect as: {userId}</p>
                <ActiveChat setCurrentChat={setCurrentChat} myActiveChats={myActiveChats} />
                <CreateChat createChat={createChat} users={users.filter(user => user !== userId)} />
                {currentChat && <ChatWindow sendMessage={sendMessage} currentChat={currentChat} messages={currentChatMessages} /> }
                </>
            )}
        </div>
    );
};

export default Layout;