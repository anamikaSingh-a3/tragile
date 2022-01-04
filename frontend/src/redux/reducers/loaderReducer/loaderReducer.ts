import { LOGOUT_RESET_STATE, SET_LOADER } from "../../types"

const loaderReducer = (state = false, action: { type: string, payload: boolean }) => {
    switch (action.type) {
        case SET_LOADER: {
            return action.payload
        }
        case LOGOUT_RESET_STATE: {
            return state
        }
        default: return state
    }
}
export default loaderReducer