import { useContext, useState } from "react"
import { TaskContext } from "../contexts/TaskContext";

export default function AddTask(){
    const [text, setText] = useState('');
    const {onAddTask} = useContext(TaskContext)
    return (
        <>
            <input type="text" placeholder="Add Task..."
             value={text}
             onChange={(e)=>setText(e.target.value)}
             />
            <button onClick={()=>{
                setText("");
                onAddTask(text);
            }}>Add Task</button>
        </>
    )
}