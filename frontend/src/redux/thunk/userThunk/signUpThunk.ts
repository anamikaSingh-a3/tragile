import axios from 'axios';
import { IUser } from 'tragile-user';
import { userApi } from '../../../endpoints.ts';
import { messageAction } from '../../action/messageActions/messageAction';
import { addToken, addUserToken } from '../../action/userActions/userActions';

export const signUpThunk = (user: IUser) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${userApi}/signUp`, user)
        if (response.status === 201) {
            dispatch(addToken(response.data.payload))
            dispatch(messageAction(response.data.message))
        }
        else if (response.status === 200) {
            dispatch(messageAction(response.data.message))
            localStorage.setItem("token", JSON.stringify(response.data.payload.token));
            dispatch(addUserToken(response.data.payload))
        }

    } catch (error) {
        dispatch(messageAction('User could not be signed up'))
    }
}