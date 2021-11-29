// import { type } from 'os';
import { type } from 'os';
import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import ToDoList from './TodoList';

export type FilterValueType = 'all' | 'active' | 'completed'

export type TaskType = {
    title: string
    isDone: boolean
    id: string
}

function App() {
    console.log(v1())
    const todoListTitle_1: string = 'What I learn'

    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: 'HTML', isDone: true },
        { id: v1(), title: 'CSS', isDone: true },
        { id: v1(), title: 'REACT', isDone: false },
        { id: v1(), title: 'REDUX', isDone: false },
    ])

    function changeTasksStatus (taskID: string, isDone: boolean) {
        const updatedTasks = (tasks.map(task => task.id === taskID ? {...task, isDone: !task.isDone}:task))
        setTasks(updatedTasks)
    }

    function removeTask(taskID: string) {
        setTasks(tasks.filter(task => task.id !== taskID))
    }

    const [filter, setFilter] = useState<FilterValueType>('all');

    function changeFilter(filter: 'all' | 'active' | 'completed') {
        setFilter(filter)
    }

    const addTask = (newTaskTitle: string) => {
        // const newTaskTitle: string = 'New task'
        const newTask: TaskType = {
            id: v1(),
            title: newTaskTitle,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    let tasksForRender = tasks
    if (filter === 'active') {
        tasksForRender = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForRender = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className='App'>
            <ToDoList
                title={todoListTitle_1}
                tasks={tasksForRender}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                filter={filter}
                chngeTasksStstus={changeTasksStatus}
            />
        </div>
    );
}

export default App;