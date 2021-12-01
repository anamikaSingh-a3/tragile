import { IList } from '../interfaces/index'

const initialState: IList[] = []
const activeBoardListReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
    switch (action.type) {
      case 'ACTIVE_BOARD_LIST': {
          if (action.payload.length > 1) return [...action.payload]
          return [...state, ...action.payload]
      }
      case 'REST_ACTIVE_BOARDS_LIST': {
          return initialState
      }
      default:
          return state
  }
}
export default activeBoardListReducer
