import { IBoard } from '../interfaces'
import { ACTIVE_BOARD_IN_BOARDPAGE, RESET_ACTIVE_BOARD_IN_BOARDPAGE } from '../types'

const initialState: IBoard[] = []

const activeBoardReducer = (
  state = initialState,
  action: { type: string; payload: IBoard[] }
) => {
  switch (action.type) {
    case ACTIVE_BOARD_IN_BOARDPAGE: {
      return action.payload
    }
    case RESET_ACTIVE_BOARD_IN_BOARDPAGE: {
      return initialState
    }
    default:
      return state
  }
}

export default activeBoardReducer