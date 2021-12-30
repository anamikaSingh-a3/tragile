import { ADD_USER, LOGOUT_RESET_STATE, RESET_USER } from '../../types';

const initialState = {
    userData: [{
        user_id: '',
        name: '',
        username: '',
        bio: '',
        email: '',
        password: '',
        created_at: Date,
        updated_at: Date
    }],
    token: ''
}

const UserReducer = (state = initialState, action: { type: string, payload: string }) => {
    switch (action.type) {
        case ADD_USER: {
            return action.payload
        }
        case RESET_USER: {
            return initialState
        }
        case LOGOUT_RESET_STATE: {
            return initialState
        }
        default:
            return state
    }
}
export default UserReducer