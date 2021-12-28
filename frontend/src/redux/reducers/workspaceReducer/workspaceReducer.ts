import { IWorkspace } from 'tragile-workspace';

import { ADD_WORKSPACE } from '../../types';

const initialState: IWorkspace[] = []

const workspaceReducer = (
  state = initialState,
  action: { type: string; payload: IWorkspace[] }
) => {
  switch (action.type) {
    case ADD_WORKSPACE: {
      if (state.length === 0) return [...action.payload]
      else if (state.length >= 1 && action.payload.length >= 1) return [...state]
      else return [...state, action.payload]
    }
    default:
      return state
  }
}
export default workspaceReducer
