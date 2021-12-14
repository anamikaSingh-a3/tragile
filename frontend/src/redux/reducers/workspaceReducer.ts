import { IWorkspace } from 'tragile-workspace'

import { ADD_WORKSPACE } from '../types'

const initialState: IWorkspace[] = []

const addWorkspaceLogic = (state: IWorkspace[], payload: IWorkspace[]) => {
  if (payload.length >= 1) return [...state, ...payload]
  else return [...state, payload]
}
const workspaceReducer = (
  state = initialState,
  action: { type: string; payload: IWorkspace[] }
) => {
  switch (action.type) {
    case ADD_WORKSPACE: {
      return addWorkspaceLogic(state, action.payload)
    }
    default:
      return state
  }
}
export default workspaceReducer
