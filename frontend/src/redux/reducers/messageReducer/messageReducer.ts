import { ADD_ERROR_MESSAGE, LOGOUT_RESET_STATE } from '../../types';

const messageReducer = (state = "", action: { type: string, payload: string }) => {
    switch (action.type) {
        case ADD_ERROR_MESSAGE: {
            return action.payload
        }
        case LOGOUT_RESET_STATE: {
            return ''
        }
        default:
            return state
    }
}
export default messageReducer