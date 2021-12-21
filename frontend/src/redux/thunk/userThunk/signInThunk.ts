import axios from 'axios';

import { userApi } from '../../../endpoints.ts';
import { messageAction } from '../../action/messageActions/messageAction';
import { addUser } from '../../action/userActions/userActions';

export const signInThunk = (email: string, password: string) => async (dispatch: any) => {

    const user = { email, password }
    try {
        const response = await axios.post(`${userApi}/signIn`, user)
        if (response.status === 202) {
            localStorage.setItem("token", JSON.stringify(response.data.payload.token));
            dispatch(addUser(response.data.payload))
            dispatch(messageAction(response.data.message))
        }
        else if (response.status === 200) dispatch(messageAction(response.data.message))

    } catch (error) {
        dispatch(messageAction('User could not be signed in'))
    }
}