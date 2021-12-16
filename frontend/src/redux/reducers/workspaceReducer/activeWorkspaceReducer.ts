import { IWorkspace } from 'tragile-workspace'

import { ACTIVE_WORKSPACE } from '../../types'

const initialState: IWorkspace[] = []

const activeWorkspaceReducer = (
  state = initialState,
  action: { type: string; payload: IWorkspace[] }
) => {
  switch (action.type) {
    case ACTIVE_WORKSPACE: {
      return action.payload
    }
    default:
      return state
  }
}

export default activeWorkspaceReducer
