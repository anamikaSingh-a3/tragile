import { ADD_ERROR_MESSAGE } from '../../types';

const messageReducer = (state = "", action: { type: string, payload: string }) => {
    switch (action.type) {
        case ADD_ERROR_MESSAGE: {
            return action.payload
        }
        default:
            return state
    }
}
export default messageReducer