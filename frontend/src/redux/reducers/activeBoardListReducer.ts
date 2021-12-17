import { IList } from 'tragile-list'


import { ACTIVE_BOARD_LIST, REST_ACTIVE_BOARDS_LIST } from '../types'


const initialState: IList[] = []

const addActiveBoardListLogic = (state: IList[], payload: IList[]) => {
  console.log("paylod", payload)
  if (payload.length > 1) return [...payload]
  else return [...state, payload]
}
const activeBoardListReducer = (
  state = initialState,
  action: { type: string; payload: IList[] }
) => {
    switch (action.type) {
      case ACTIVE_BOARD_LIST: {
        return addActiveBoardListLogic(state, action.payload)
      }
      case REST_ACTIVE_BOARDS_LIST: {
          return initialState
      }
      default:
          return state
  }
}
export default activeBoardListReducer