import React from 'react';
import "./WelcomeBar.css"
function WelcomeBar(props) {
    return (
        <div className="welcome-bar">
            <div className="greetings">
                <p>Good Morning, <span>Fuad!</span></p>
                <h2>What do you plan to do today?</h2>
            </div>
            <div className="task-analysis">
                <div className="total-tasks task-card">
                    <p className="total-count">100</p>
                    <p className="total-title">Total Task</p>
                </div>
                <div className="total-tasks task-card">
                    <p className="total-count">80</p>
                    <p className="total-title">Completed</p>
                </div>
            </div>
        </div>
    );
}

export default WelcomeBar;

