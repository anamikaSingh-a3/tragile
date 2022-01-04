import { ADD_ERROR_MESSAGE } from '../../types';

export const messageAction = (message: string) => {
    return {
        type: ADD_ERROR_MESSAGE,
        payload: message
    }
}