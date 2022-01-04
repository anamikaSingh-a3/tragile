import { ADD_TOKEN, LOGOUT_RESET_STATE, RESET_TOKEN } from '../../types';

const initialState = {
    token: ''
}
const tokenReducer = (state = initialState, action: { type: string, payload: string }) => {
    switch (action.type) {
        case ADD_TOKEN: {
            return action.payload
        }
        case RESET_TOKEN: {
            return initialState
        }
        case LOGOUT_RESET_STATE: {
            return initialState
        }
        default:
            return state
    }
}
export default tokenReducer