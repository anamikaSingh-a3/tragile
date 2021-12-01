import { IBoard } from '../interfaces'
import { ADD_BOARD } from '../types'

const initialState: IBoard[] = []

const boardsReducer = (
  state = initialState,
  action: { type: string; payload: any }
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
