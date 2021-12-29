import { LOGOUT_USER } from "../../types"

const logoutReducer = (state = false, action: { type: string, payload: boolean }) => {
    switch (action.type) {
        case LOGOUT_USER: {
            return action.payload
        }
        default: return state
    }
}
export default logoutReducer