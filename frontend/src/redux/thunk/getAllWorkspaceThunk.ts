import axios from 'axios'
import { workspaceApi } from '../../endpoints.ts'
import { addWorkspaces } from '../action'

export const getAllWorkspacesThunk = () => async (dispatch: any) => {
  try {
    const workspace = await axios.get(`${workspaceApi}/getAll`)
    dispatch(addWorkspaces(workspace.data))
  } catch (error) {
    alert(error)
  }
}
