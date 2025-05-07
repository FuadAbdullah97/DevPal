import React from 'react';
import AiICon from "../../assets/ai-icon.png"
import sendButton from "../../assets/arrow.png"
import "./AiChat.css"
function AiChat(props) {
    return (

            <div className="ai-chat-container">
                <div className="ai-chat-top">
                    <div className="ai-chat-title">
                        <h2>AI Assist</h2>
                        <img src={AiICon} alt=""/>
                    </div>
                    <div className="ai-chat-subtitle">
                        <p>Knowledge, answers, ideas, One click away.</p>
                    </div>
                </div>
                <div className="ai-middle-container">

                    <div className="ai-greetings">
                        <p>Hi Fuad</p>
                        <h2>How can i help you?</h2>
                    </div>
                    <div className="ai-main-suggestions">
                        <img src={AiICon} alt=""/>
                        <div className="ai-main-suggestion">
                            <p>"Can you help me with my first task?"</p>
                        </div>
                        <div className="ai-main-suggestion">
                            <p>"Can you help me with my first task?"</p>
                        </div>
                        <div className="ai-main-suggestion">
                            <p>"Can you help me with my first task?"</p>
                        </div>
                    </div>


                <div className="ai-bottom">
                    <input type="text" placeholder="Write Something"/>
                    <img src={sendButton} alt=""/>
                </div>

                </div>
            </div>

    );
}

export default AiChat;

