import React from "react";
import './chatWith.css';
const ChatWith = () => {
    return (
     <div className="Chat-section">
         <div className="chat-container">
         <button className="chat-btn" style={{backgroundColor: "#dc143c"}}>Chat with us</button>
         </div>
         <div className="chat-container">
         <button className="chat-btn" style={{backgroundColor: "#1e79e4"}}>Chat with us</button>
         </div>
     </div>
    );
}

export default ChatWith;