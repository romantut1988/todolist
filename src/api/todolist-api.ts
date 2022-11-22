import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '983f5ae0-fa70-42e7-b1da-b9aece5af228'
    }
})

export const todolistApi = {
    getToDoLists() {
        const promise = instance.get<ToDoListType[]>('todo-lists')
        return promise
    },
    createToDoList(title: string) {
        return instance.post<ResponseType<{item:ToDoListType}>>('todo-lists', {title})
    },
    updateToDoList(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title: title})
    },
    deleteToDoList(todoId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todoId}`)
        return promise
    }
}

type ResponseType<T ={}> = {
    data: T
    fieldsErrors: []
    messages: []
    resultCode: number
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: []
    fieldsErrors: string[]
    data: {
        item: {
            title: string,
            id: string,
            addedDate: string,
            order: number
        }
    }
}

type UpdateTodolistResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

type DeleteTodolistResponseType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number
}

type ToDoListType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}
