import axios from 'axios';

import { userApi } from '../../../endpoints.ts';
import { messageAction } from '../../action/messageActions/messageAction';
import { addToken, addUser, addUserToken, logoutAction, resetUser } from '../../action/userActions/userActions';
import { setLoader } from '../../action/LoaderActions/loaderActions';
// import { useHistory } from 'react-router';

export const signInThunk = (email: string, password: string) => async (dispatch: any) => {
    const user = { email, password }
    dispatch(setLoader(true))
    dispatch(logoutAction(false))
    try {
        const response = await axios.post(`${userApi}/signIn`, user)
        if (response.status === 200) {
            localStorage.setItem("token", JSON.stringify(response.data.payload.token));
            dispatch(addUser(response.data.payload))
            dispatch(addToken(response.data.payload.token))
            dispatch(messageAction(response.data.message))
            dispatch(addUserToken(response.data.payload))
            dispatch(setLoader(false))
            dispatch(logoutAction(true))
            alert("login succseefull")
        }
        else if (response.status === 401) {
            dispatch(resetUser())
            dispatch(messageAction(response.data.message))
            dispatch(setLoader(false))
            alert('check your credentials')
            dispatch(logoutAction(false))
        }

    } catch (error) {
        dispatch(messageAction('User could not be signed in'))
        dispatch(setLoader(false))
        dispatch(logoutAction(false))
        alert('check your credentials')

    }
}