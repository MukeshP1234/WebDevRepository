import { useState } from "react"
import React from 'react'
import './Todolist.css'

function Todolist() {
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    return(
        <div className="todo">
            <h2>To Do List</h2>
            <div>
                <input type="text" placeholder="Enter the task..." value={newTask} onChange={handleInputChange}/>
                <button className="Addbtn" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default Todolist
