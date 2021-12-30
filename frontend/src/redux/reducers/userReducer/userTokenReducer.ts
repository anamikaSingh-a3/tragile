import { IUserToken } from 'tragile-user';
import { ADD_USER_WITH_TOKEN, LOGOUT_RESET_STATE } from '../../types';

const initialState: IUserToken = {
    name: '',
    email: ''
}

const UserTokenReducer = (state = initialState, action: { type: string, payload: string }) => {
    switch (action.type) {
        case ADD_USER_WITH_TOKEN: {
            return action.payload
        }
        case LOGOUT_RESET_STATE: {
            return initialState
        }
        default:
            return state
    }
}
export default UserTokenReducer