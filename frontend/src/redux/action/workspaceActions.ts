import { IActiveWorkspace, IWorkspace } from '../interfaces'
import { ACTIVE_WORKSPACE, ADD_WORKSPACE } from '../types'

export const addWorkspaces = (workspace: IWorkspace) => {
  return {
    id: workspace.workspace_id,
    type: ADD_WORKSPACE,
    payload: workspace,
  }
}

export const activeWorkspace = (activeWorkspace: IActiveWorkspace) => {
  return {
    type: ACTIVE_WORKSPACE,
    payload: activeWorkspace,
  }
}

