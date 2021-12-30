// import { logout, logoutResetState } from '../../action/userActions/userActions';
import storage from 'redux-persist/lib/storage'

import { logoutAction, logoutResetState } from "../../action/userActions/userActions"

export const logoutThunk = () => async (dispatch: any) => {
    try {
        localStorage.clear()
        dispatch(logoutAction(false))
        storage.removeItem('persist:root')
        dispatch(logoutResetState())
        // alert('user successfully logged out')
    } catch {
        alert('in catch')
    }
}