import React from 'react';

const ActiveChat = ({myActiveChats, setCurrentChat}) => (
    <div className="panel">
        <h3>Select an Active Chat</h3>
        {myActiveChats.map(chat => (
            <div onClick={() => setCurrentChat(chat)}>{chat}</div>
        ))}
    </div>
);

export default ActiveChat;