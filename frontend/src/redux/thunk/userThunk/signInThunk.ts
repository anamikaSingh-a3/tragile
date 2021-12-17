import axios from 'axios';

import { userApi } from '../../../endpoints.ts';
import { errorMessage } from '../../action/errorAction';
import { addUser } from '../../action/userActions';

export const signInThunk = (email: string, password: string) => async (dispatch: any) => {

    const user = { email, password }
    try {
        const response = await axios.post(`${userApi}/signIn`, user)
        if (response.status === 202) {
            dispatch(addUser(response.data.payload))
            dispatch(errorMessage(response.data.message))
        }
        else if (response.status === 200) dispatch(errorMessage(response.data.message))

    } catch (error) {
        dispatch(errorMessage('User could not be signed in'))
    }
}