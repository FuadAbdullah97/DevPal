import React, {use, useEffect, useRef, useState} from 'react';
import plusIcon from "../../assets/plus.png"
import taskCircle from "../../assets/circle.png"
import deleteIcon from "../../assets/delete.png"
import aiIcon from "../../assets/ai-icon.png"
import FilterBar from "./FilterBar.jsx";
import TaskModal from "../TaskModal/TaskModal.jsx";
import "../TaskModal/TaskModal.css"

function TaskList(props) {
    const [openPopup, setOpenPopup] = useState(false);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const priorityRef= useRef(null);
    const [tasks, setTasks] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const storedTasks = localStorage.getItem("myTasks");
        console.log("Tasks loaded from localStorage:", storedTasks);
        if(storedTasks){
            try {
                const parsedTasks = JSON.parse(storedTasks);
                setTasks(parsedTasks);
                console.log("Parsed tasks:", parsedTasks);
            } catch (error) {
                console.error("Error parsing stored tasks:", error);
                // Optionally set tasks to an empty array as a fallback
                setTasks([]);
            }
        }
    }, []); // Empty dependency array means this runs only once after the initial render

    useEffect( () => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    }, [tasks]);


    const add = () => {
        const inputRef = titleRef.current.value;
        const description = descriptionRef.current.value;
        const priority = priorityRef.current.value;
        if (inputRef.trim() !== "") { // Prevent adding empty tasks
            const newTask = {
                id: Date.now(),
                text: inputRef,
                isCompleted: false,
                description : description,
                priority : priority,
            };
            setTasks((prevTasks) => [...prevTasks, newTask]); // Use the previous state correctly
            setOpenPopup(false); // Close the modal after adding
        }
    };

    return (
        <>
            <div className="task-list task-cards">
                <FilterBar/>
                <div id="add-new-task" className="task-container">
                    <img src={plusIcon} alt="" className="task-icons"/>
                    <button onClick={() => setOpenPopup(true)}> Add A Task Here</button>
                </div>


            {tasks.map((task) => ( // Use the 'tasks' state variable
                <div className="tasks task-container" key={task.id}> {/* Add a key for React to efficiently update the list */}
                    <div className="task-title">
                        <img src={taskCircle} alt="" className="task-icons"/>
                        <span>{task.text}</span>
                        <p>{task.description}</p>
                    </div>
                    <div className="task-crud">
                        <span className="task-meta high">{task.priority}</span>
                        <img src={aiIcon} alt="" className="task-icons"/>
                        <img src={deleteIcon} alt="" className="task-icons"/>
                    </div>
                </div>
            ))}
            </div>
            {openPopup && (
                <TaskModal
                open  = {openPopup}
                onclose = {() => setOpenPopup(false)}
                onAddTask = {add}
                titleRef = {titleRef}
                descriptionRef = {descriptionRef}
                priorityRef = {priorityRef}
                />
            )}
        </>
    );
}

export default TaskList;