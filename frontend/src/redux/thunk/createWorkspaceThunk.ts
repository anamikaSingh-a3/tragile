import { IWorkspace } from '../interfaces'
import { addWorkspaces } from '../action'
import { workspaceApi } from '../../endpoints.ts'
import axios from 'axios'

export const createWorkspaceThunk =
  (requestBody: IWorkspace) => async (dispatch: any) => {
    try {
      const response = await axios.post(`${workspaceApi}/create`, requestBody)
      dispatch(addWorkspaces(response.data))
    } catch (error) {
      alert(error)
    }
  }
