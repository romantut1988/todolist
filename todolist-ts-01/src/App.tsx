import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const todoListTitle: string = 'What to learn'

      const [tasks, setTasks] = useState<Array<TaskType>>( [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'REACT', isDone: false},
    ])

    const [filter, setFilter] = useState<'all'|'active'|'complited'>('all')

    const changeFilter = (filter: 'all'|'active'|'complited') => {
        setFilter(filter)
    }

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task=> task.id !== taskID))
    }

    let tasksForRender = tasks
    if (filter === 'active') {
        tasksForRender = tasks.filter(t=>t.isDone === false)
    }

    if (filter === 'complited') {
        tasksForRender = tasks.filter(t=>t.isDone === true)
    }

    return (
        <div className='App'>
            <TodoList
                title={todoListTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}
export default App;
