import { IActiveWorkspace, IWorkspace } from '../interfaces'

export const addWrokspace = (workspace: IWorkspace) => {
  return {
    // id: workspace.workspace_id,
    type: 'ADD_WORKSPACE',
    payload: workspace,
  }
}

export const activeWorkspace = (activeWorkspace: IActiveWorkspace) => {
  return {
    type: 'ACTIVE_WORKSPACE',
    payload: activeWorkspace,
  }
}
