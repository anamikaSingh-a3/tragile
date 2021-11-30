import { IBoard } from '../interfaces'

const initialState: IBoard[] = []

const activeBoardReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ACTIVE_BOARD_IN_BOARDPAGE': {
      return action.payload
    }
   
    default:
      return state
  }
}

export default activeBoardReducer
