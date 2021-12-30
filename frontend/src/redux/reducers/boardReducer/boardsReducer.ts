import { IBoard } from 'tragile-board';

import { ADD_BOARD, LOGOUT_RESET_STATE } from '../../types';

const initialState: IBoard[] = []

const boardsReducer = (
  state = initialState,
  action: { type: string; payload: IBoard[] }
) => {
  switch (action.type) {
    case ADD_BOARD: {
      return [...state, action.payload]
    }
    case LOGOUT_RESET_STATE: {
      return initialState
    }
    default:
      return state
  }
}

export default boardsReducer