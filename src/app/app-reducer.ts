export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}

        case 'APP/SET-ERROR':
            return {...state, error: 'some error'}
        default:
            return state
    }
}

export const setStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setError = (error: string | null) => ({type: 'APP/SET-ERROR', status} as const)

export type SetStatusType = ReturnType<typeof setStatus>
export type setErrorType = ReturnType<typeof setError>

type ActionsType = SetStatusType | setErrorType
