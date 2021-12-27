import { IUser, IUserToken } from 'tragile-user';

import { ADD_TOKEN, ADD_USER, ADD_USER_WITH_TOKEN, RESET_TOKEN, RESET_USER } from '../../types';


export const addToken = (token: string) => {
    return {
        type: ADD_TOKEN,
        payload: token
    }
}

export const addUser = (user: IUser) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const addUserToken = (user: IUserToken) => {
    return {
        type: ADD_USER_WITH_TOKEN,
        payload: user
    }
}

export const resetToken = () => {
    return {
        type: RESET_TOKEN,
    }
}

export const resetUser = () => {
    return {
        type: RESET_USER,
    }
}
