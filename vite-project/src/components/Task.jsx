import { useContext, useState } from "react"
import { TaskContext } from "../contexts/TaskContext";

export default function Task({task}){

    const {onChangeTask, onDeleteTask} = useContext(TaskContext);
    const [isEditing, setEditing] = useState(false);
    const Content = isEditing ? (<>
                                    <input type="text"
                                    value={task.text}
                                    onChange={(e)=>onChangeTask({
                                        ...task,
                                        text: e.target.value
                                    })}
                                    />
                                    <button onClick={()=>setEditing(false)}>Save</button>
                                </>) :
                                (<>
                                    {task.text} 
                                    <button onClick={()=>setEditing(true)}>Edit</button>
                                </>)
    //setEditing(Content);                            
    return (
        <>
            <input type="checkbox" checked={task.done} onChange={(e) =>onChangeTask({
                ...task,
                done: e.target.checked
            })} />
            {Content}
            <button onClick={()=>onDeleteTask(task.id)}>Delete</button>
        </>
    )
}