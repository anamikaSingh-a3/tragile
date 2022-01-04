import { IList } from 'tragile-list';

import { ACTIVE_LIST, LOGOUT_RESET_STATE } from '../../types';

const initialState: IList = {
    list_id: "",
    title: "",
    board: ""
}

const activeListReducer = (
    state = initialState,
    action: { type: string, payload: IList }
) => {
    switch (action.type) {
        case ACTIVE_LIST: {
            return action.payload
        }
        case LOGOUT_RESET_STATE: {
            return initialState
        }
        default:
            return state
    }
}

export default activeListReducer