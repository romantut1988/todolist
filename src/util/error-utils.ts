import {setError, setStatus} from "../app/app-reducer";
import {AppThunkDispatch} from "../app/store";
import {ResponseType} from '../api/todolists-api';

export const handleServerNetworkError = (error: { messages: string }, dispatch: AppThunkDispatch) => {
    dispatch(setStatus('failed'))
    dispatch(setError(error.messages))
}

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: AppThunkDispatch) => {
    if (data.messages.length) {
        dispatch(setError(data.messages[0]))
    } else {
        dispatch(setError('Some error'))
    }
    dispatch(setStatus('failed'))
}
