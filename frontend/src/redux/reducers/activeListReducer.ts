import { IList } from "../interfaces"
import { ACTIVE_LIST } from "../types"

const initialState: IList = {
    list_id: "",
    title: "",
    board_id: ""
}

const activeListReducer = (
    state= initialState,
    action: { type: string, payload: IList }
) => {
    switch (action.type) {
        case ACTIVE_LIST: {
          return action.payload
        }
        default:
          return state
      }
}

export default activeListReducer