import { ADD_TOKEN, RESET_TOKEN } from '../../types';

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
        default:
            return state
    }
}
export default tokenReducer