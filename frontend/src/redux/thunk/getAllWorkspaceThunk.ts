import api from '../../api/workspace'
import { addWorkspaces } from '../action'

export const getAllWorkspacesThunk = () => async (dispatch: any) => {
  const workspace = await api.get('/getAll')

  dispatch(addWorkspaces(workspace.data))
}
