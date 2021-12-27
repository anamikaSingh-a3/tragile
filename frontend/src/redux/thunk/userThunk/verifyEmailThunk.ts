import axios from 'axios';
import { userApi } from '../../../endpoints.ts';
import { messageAction } from '../../action/messageActions/messageAction';
import { addUser, addUserToken } from '../../action/userActions/userActions';

export const verifyEmailThunk = (userToken: string) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${userApi}/verifyToken/${userToken}`)
        if (response.status === 200) {
            console.log("Email verified!")
            dispatch(addUserToken(response.data.payload))
            dispatch(messageAction(response.data.payload.message))
            // return { email: response.data.payload.email, name: response.data.payload.name }
        }
        else if (response.status === 400) {
            console.log("Email not verified!")
            dispatch(messageAction(response.data.payload.message))
        }
    } catch (error) {
        dispatch(messageAction(error as string))
    }
}