import React from "react";
import {TaskType} from "./App";


type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: 'all'|'active'|'complited') => void
}

 function TodoList(props: PropsType) {
    const tasksJSX = props.tasks.map(task => {
        return (
            <li key = {task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={()=>props.removeTask(task.id)}>x</button>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button onClick={()=> props.changeFilter('all')}>All</button>
                <button onClick={()=> props.changeFilter('active')}>Active</button>
                <button onClick={()=> props.changeFilter('complited')}>Completed</button>
            </div>
        </div>
    )
 }

export default TodoList;

