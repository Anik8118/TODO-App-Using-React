import { createContext, useState } from "react";
import { InitialTask } from "../assets/data/Server";

export const TaskContext = createContext(null);


export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(InitialTask);

    function idGenerator(){
        function idGenerator(){
            initialId = 0;
            tasks.map(t=>{
                if(t.id > initialId){
                    initialId = t.id;
                }return initialId;
            })
        }
    }

    const handleChangeTask = (task)=>{
        const previousTask = tasks.map(t=>{
            if(t.id === task.id){
                return {
                    ...t,
                    text: task.text,
                    done: task.done
                };
            } 
            return t;
        })
        setTasks(previousTask);
    }

    const handleDeleteTask = (TaskId)=>{
        const deleteTask = tasks.filter(t=>t.id !== TaskId);
        setTasks(deleteTask);
    }

    const handleAddTask = (text)=>{
        if(text !== ''){
            const newTask = [
                ...tasks,
                {
                    id: idGenerator(),
                    text,
                    done: false
                }
            ]
            setTasks(newTask);
        }else{
            window.alert("Please Write Some Text");
            return;
        }
    }

    return (
        <TaskContext.Provider value={{ 
            tasks,
            onChangeTask: handleChangeTask,
            onDeleteTask: handleDeleteTask,
            onAddTask: handleAddTask,
        }}>
            {children}
        </TaskContext.Provider>
    );
}
