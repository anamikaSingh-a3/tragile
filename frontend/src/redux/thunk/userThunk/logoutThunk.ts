// import { logout } from "../../action/userActions/userActions"

import { logout } from "../../action/userActions/userActions"

export const logoutThunk = () => async (dispatch: any) => {
    try {
        localStorage.clear()
        dispatch(logout(false))
    } catch {
        alert('in catch')
    }
}