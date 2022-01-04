import { LOGOUT_RESET_STATE, LOGOUT_USER } from "../../types"
import storage from 'redux-persist/lib/storage'

const logoutReducer = (state = false, action: { type: string, payload: boolean }) => {
    switch (action.type) {
        case LOGOUT_USER: {
            // alert('in logut user')
            // localStorage.clear()
            storage.removeItem('persist:root')
            storage.setItem('persist:root', '')
            const persist = storage.getItem('persist:root')
            console.log("persist", persist)
            return action.payload
        }
        case LOGOUT_RESET_STATE: {
            return state
        }
        default: return state
    }
}
export default logoutReducer