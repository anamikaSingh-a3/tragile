import { IWorkspace } from '../interfaces'

const initialState: IWorkspace[] = []

const workspaceReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_WORKSPACE': {
      console.log('WORKSPACE REDUCER PAY:LOAD', action.payload)
      return [...state, action.payload]
    }
    default:
      return state
  }
}

export default workspaceReducer
