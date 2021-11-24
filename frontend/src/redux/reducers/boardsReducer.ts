import { IBoard } from '../interfaces'

const initialState: IBoard[] = []

const boardsReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  console.log('line 13')
  switch (action.type) {
    case 'ADD_BOARD': {
      console.log('payload switch', action.payload)

      console.log('State in switch', action.payload.state)
      console.log(
        'active in switch',
        action.payload.state.activeWorkspace.board
      )
      action.payload.state.activeWorkspace.board.push(action.payload.board)
      return [...state, action.payload.board]
    }

    default:
      return state
  }
}

export default boardsReducer
