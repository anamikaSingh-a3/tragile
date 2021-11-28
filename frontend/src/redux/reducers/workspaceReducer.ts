import { IWorkspace } from '../interfaces'

const initialState: IWorkspace[] = []

const workspaceReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_WORKSPACE': {
      console.log('in add workspace action creater ')
      console.log('action.payload', action.payload)
      if (action.payload.length >= 1) return [...state, ...action.payload]
      else return [...state, action.payload]
    }
    default:
      return state
  }
}

export default workspaceReducer
