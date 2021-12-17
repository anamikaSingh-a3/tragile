import axios from 'axios';
import { IUser } from 'tragile-user';

import { userApi } from '../../../endpoints.ts';
import { errorMessage } from '../../action/errorAction';
import { addToken } from '../../action/userActions';

export const signUpThunk = (user: IUser) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${userApi}/signUp`, user)
        if (response.status === 201) {
            dispatch(addToken(response.data.payload))
            dispatch(errorMessage(response.data.message))
        }
        else dispatch(errorMessage(response.data.message))

    } catch (error) {
        dispatch(errorMessage('User could not be signed up'))
    }
}