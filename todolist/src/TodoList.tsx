import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import App from "./App";
import {TaskType} from "./App";
import {FilterValueType} from './App';


export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
}

function TodoList(props: PropsType) {
    const [title, setTitle] = useState<string>('')
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const changeTitle = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEnterPress = (e:KeyboardEvent<HTMLInputElement>)=>{if(e.key === 'Enter'){addTask()}}
    const setAllFilterValue = () =>  props.changeFilter('all')
    const setActiveFilterValue = () =>  props.changeFilter('active')
    const setCompletedFilterValue = () =>  props.changeFilter('completed')


    const tasksJSX = props.tasks.map(task =>
        <li key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={() => { props.removeTask(task.id) }}>X</button>
        </li>
    )

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={changeTitle}
                    onKeyPress={onEnterPress}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button onClick={setAllFilterValue}>All</button>
                <button onClick={setActiveFilterValue}>Active</button>
                <button onClick={setCompletedFilterValue}>Completed</button>
            </div>
        </div>

    );
}

export default TodoList;

