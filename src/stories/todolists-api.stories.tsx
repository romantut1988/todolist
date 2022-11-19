import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '983f5ae0-fa70-42e7-b1da-b9aece5af228'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const data = {title: "LESSON 13"}
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', data, settings)
            .then(() => {
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

