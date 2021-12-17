import { ADD_ERROR_MESSAGE } from '../types';

export const errorMessage = (message: string) => {
    return {
        type: ADD_ERROR_MESSAGE,
        payload: message
    }
}