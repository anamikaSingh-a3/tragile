import { workspaceApi } from '../../../endpoints.ts'
import axios from 'axios'
import { IWorkspace } from 'tragile-workspace'
import { addWorkspaces } from '../../action/workspaceAction/workspaceActions'


export const createWorkspaceThunk =
  (requestBody: IWorkspace) => async (dispatch: any) => {
    try {
      const response = await axios.post(`${workspaceApi}/create`, requestBody)
      dispatch(addWorkspaces(response.data.payload))
    } catch (error) {
      alert(error)
    }
  }
