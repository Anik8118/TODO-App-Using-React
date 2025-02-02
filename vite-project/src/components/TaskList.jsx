import { useContext, useState } from "react"
import { TaskContext } from "../contexts/TaskContext"
import Task from "./Task"

export default function TaskList(){

    const {tasks} = useContext(TaskContext);
    return (
        <ul>
            {tasks.map(task=>(
                <li style={{listStyle:'none'}} key={task.id}><Task task={task}/></li>
            ))}
        </ul>
    )
}