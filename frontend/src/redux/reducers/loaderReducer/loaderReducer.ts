import { SET_LOADER } from "../../types"

const loaderReducer = (state = false, action: { type: string, payload: boolean }) => {
    switch (action.type) {
        case SET_LOADER: {
            return action.payload
        }
        default: return state
    }
}
export default loaderReducer