import { IWorkspace } from 'tragile-workspace';

import { ACTIVE_WORKSPACE, LOGOUT_RESET_STATE } from '../../types';

const initialState: IWorkspace[] = []

const activeWorkspaceReducer = (
  state = initialState,
  action: { type: string; payload: IWorkspace[] }
) => {
  switch (action.type) {
    case ACTIVE_WORKSPACE: {
      return action.payload
    }
    case LOGOUT_RESET_STATE: {
      return initialState
    }
    default:
      return state
  }
}

export default activeWorkspaceReducer
