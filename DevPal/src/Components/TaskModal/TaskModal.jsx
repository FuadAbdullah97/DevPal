// TaskModal.jsx
import React from 'react';

function TaskModal({ open, onClose, onAddTask, titleRef, descriptionRef, priorityRef }) {
    if (!open) {
        return null;
    }

    return (
        <div className="task-modal-hide">
            <div className="task-modal-container">
                <h2>Add A Task</h2>
                <div className="task-title ">
                    <input type="text" ref={titleRef} placeholder="Title" className="modal-field"/>
                </div>
                <div className="task-description ">
                    <textarea placeholder="Description" rows="3" className="modal-field"
                              id="task-description-field" ref={descriptionRef}/>
                </div>
                <div className="task-modal-buttom">
                    <div className="modal-priority-dropdown">
                        <select name="Task-Priority" id="task-priority-dropdown" ref={priorityRef}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className="modal-date-picker">
                        <input type="date" placeholder="Pick a Date"/>
                    </div>
                    <div className="modal-submit-btn">
                        <button type="button" className="btn btn-primary" onClick={onAddTask}>Add</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button> {/* Added a cancel button */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;