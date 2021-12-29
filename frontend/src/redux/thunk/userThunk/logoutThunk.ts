// import { logout } from "../../action/userActions/userActions"

import { logoutAction } from "../../action/userActions/userActions"

export const logoutThunk = () => async (dispatch: any) => {
    try {
        localStorage.clear()
        dispatch(logoutAction(false))
        // alert('user successfully logged out')
    } catch {
        alert('in catch')
    }
}