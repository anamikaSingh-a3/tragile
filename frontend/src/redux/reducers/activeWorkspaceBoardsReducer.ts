import { IBoard } from '../interfaces'

const initialState: IBoard[] = []

const activeWorkspaceBoardsReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ACTIVE_BOARD': {
      if(action.payload.length>1) return [ ...action.payload]
      else return [...state, action.payload]
    }
    case 'RESET_BOARD' : {
      console.log("in reser reducer")
      return initialState
    }
    default:
      return state
  }
}

export default activeWorkspaceBoardsReducer
