import { ADD_USER, ADD_USER_WITH_TOKEN, RESET_USER } from '../../types';

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
        // case ADD_USER_WITH_TOKEN: {
        //     return action.payload
        // }
        default:
            return state
    }
}
export default UserReducer