import { IBoard } from '../interfaces'

const initialState: IBoard[] = []
const activeBoardReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ACTIVE_BOARD': {
      if(action.payload.length>1) return [ ...action.payload]
      else return [...state, action.payload]
    }
    default:
      return state
  }
}

export default activeBoardReducer
