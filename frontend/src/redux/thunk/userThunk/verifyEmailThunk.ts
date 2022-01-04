import axios from 'axios';
import { userApi } from '../../../endpoints.ts';
import { messageAction } from '../../action/messageActions/messageAction';
import { addUserToken } from '../../action/userActions/userActions';

export const verifyEmailThunk = (userToken: string) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${userApi}/verifyToken/${userToken}`)
        if (response.status === 200) {
            dispatch(addUserToken(response.data.payload))
            dispatch(messageAction(response.data.payload.message))
        }
        else if (response.status === 400) {
            dispatch(messageAction(response.data.payload.message))
        }
    } catch (error) {
        dispatch(messageAction(error as string))
    }
}