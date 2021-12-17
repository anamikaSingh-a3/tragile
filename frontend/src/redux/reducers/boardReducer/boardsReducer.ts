import { IBoard } from 'tragile-board';

import { ADD_BOARD } from '../../types';

const initialState: IBoard[] = []

const boardsReducer = (
  state = initialState,
  action: { type: string; payload: IBoard[] }
) => {
  switch (action.type) {
    case ADD_BOARD: {
      return [...state, action.payload]
    }

    default:
      return state
  }
}

export default boardsReducer