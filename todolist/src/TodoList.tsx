import React, { useState, ChangeEvent, KeyboardEvent} from 'react';
import App from './App';
import { TaskType } from './App'
import { FilterValueType } from './App'



type PropsTupe = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
    filter: FilterValueType
    chngeTasksStstus: (taskID: string, isDone: boolean) => void
}

function ToDoList(props: PropsTupe) {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean> (false)


    const addTask = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle){
            props.addTask(trimmedTitle) //// обрезаем пробелы и пустые строки
            setTitle("")
        }
        else{
            setError(true)
        }

    }

    const changeTitle = (e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
        setError(false) // отключает красную рамку при наборе текста
    }

    //Ловим значение инпута
    const onEnterPress = (e:KeyboardEvent<HTMLInputElement>)=>{if(e.key === 'Enter'){addTask()}}
    const setAllFilterValue = () =>  props.changeFilter('all')
    const setActiveFilterValue = () =>  props.changeFilter('active')
    const setCompletedFilterValue = () =>  props.changeFilter('completed')


    const classes = ["is-done"]

    const tasksJSX = props.tasks.map(task =>{
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.chngeTasksStstus(task.id, e.currentTarget.checked)
        return(
            <li key={task.id} className ={task.isDone ? classes.join(" ") : ""}>
                <input type="checkbox"
                       checked={task.isDone}
                       onChange={changeStatus}/>
                <span>{task.title}</span>
                <button onClick={() => { props.removeTask(task.id) }}>X</button>

            </li>
        )})
    const errorMessge = error
        ? <div style={{color: "red"}}>All Bad</div>
        :null

    const getBtnClass = (filter: FilterValueType) => {
        return props.filter === filter ? "active" : ""
    }

    // props.filter === "all" ? "active" : ""

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={changeTitle}
                    onKeyPress={onEnterPress}
                    className={error ? "error" :""} // меняем класс при неправильном вводе вводе
                />
                <button onClick={addTask}>+</button>
                {errorMessge}

            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button className={getBtnClass('all')} //active - CSS свойство
                        onClick={setAllFilterValue}>All</button>
                <button className={getBtnClass('active')}
                        onClick={setActiveFilterValue}>Active</button>
                <button className={getBtnClass('completed')}
                        onClick={setCompletedFilterValue}>Completed</button>
            </div>
        </div>

    );
}

export default ToDoList;