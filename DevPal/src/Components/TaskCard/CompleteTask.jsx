import React from 'react';
import plusIcon from "../../assets/plus.png"
import taskCircle from "../../assets/circle.png"
import taskCompleteIcon from "../../assets/checked.png"
import deleteIcon from "../../assets/delete.png"
import FilterBar from "./FilterBar.jsx";
function TaskList(props) {




    return (
        <>

            <div className="task-list task-cards">


                <div className="tasks task-container">
                    <div className="task-title">
                        <img src={taskCompleteIcon} alt="" className="task-icons"/>
                        <span className="completed-task">TASK 1</span>
                    </div>

                </div>
                <div className="tasks task-container">
                    <div className="task-title">
                        <img src={taskCompleteIcon} alt="" className="task-icons"/>
                        <span className="completed-task">TASK 2</span>
                    </div>

                </div>
                <div className="tasks task-container">
                    <div className="task-title">
                        <img src={taskCompleteIcon} alt="" className="task-icons"/>
                        <span className="completed-task">TASK 3</span>
                    </div>

                </div>
            </div>
        </>
    );

}

export default TaskList;