import { IWorkspace } from '../interfaces'

const initialState: IWorkspace[] = []

const activeWorkspaceReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ACTIVE_WORKSPACE': {
      return action.payload
    }
    default:
      return state
  }
}

export default activeWorkspaceReducer
