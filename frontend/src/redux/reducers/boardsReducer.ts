import { IBoard } from '../interfaces'

const initialState: IBoard[] = []

const boardsReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_BOARD': {
      return [...state, action.payload]
    }

    default:
      return state
  }
}

export default boardsReducer