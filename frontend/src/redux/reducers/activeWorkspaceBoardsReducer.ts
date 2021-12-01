import { IBoard } from '../interfaces'
import { ACTIVE_BOARD, RESET_BOARD } from '../types'

const initialState: IBoard[] = []

const activeWorkspaceBoardReducerLogic = (state: IBoard[], payload: any) => {
  if (payload.length >= 1) return [...payload]
  else return [...state, payload]
}
const activeWorkspaceBoardsReducer = (
  state = initialState,
  action: { type: string; payload: IBoard[] }
) => {
  switch (action.type) {
    case ACTIVE_BOARD: {
      return activeWorkspaceBoardReducerLogic(state, action.payload)
    }
    case RESET_BOARD: {
      return initialState
    }
    default:
      return state
  }
}

export default activeWorkspaceBoardsReducer
