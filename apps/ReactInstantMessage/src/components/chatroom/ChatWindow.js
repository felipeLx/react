import React, { useState } from 'react';

const ChatWindow = ({messages = [], sendMessage, currentChat}) => {
    const [messageBody, setMessageBody] = useState('');

    const sortedMessages = messages.sort((a,b) => new Date(a.created).valueOf() - new Date(b.created).valueOf());

    return(
        <div className="panel">
            <div className="message">
                {sortedMessages.map(message => (
                    <p>{message.sender}: {message.body}</p>
                ))}
            </div>
                <div className="send-message">
                    <textarea value={messageBody} onChange={e => setMessageBody(e.target.value)} className="text-entry" />
                    <button onClick={() => sendMessage(currentChat, messageBody)} className="submit">Submit</button>
                </div>
        </div>
    );
};

export default ChatWindow;