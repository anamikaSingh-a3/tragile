import { addWorkspaces } from '../../action'
import { workspaceApi } from '../../../endpoints.ts'
import axios from 'axios'
import { IWorkspace } from 'tragile-workspace'
import { errorMessage } from '../../action/errorAction'

export const createWorkspaceThunk = (requestBody: IWorkspace) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${workspaceApi}/create`, requestBody)
    if (response.status === 201) dispatch(addWorkspaces(response.data.payload))
    else dispatch(errorMessage(response.data.message))
  } catch (error) {
    dispatch(errorMessage('Workspace could not be created'))
  }
}
