import api from '../../api/workspace'
import { addWrokspace } from '../action'

export const getAllWorkspacesThunk = async () => async (dispatch: any) => {
  const workspace = await api.get('/getAll')
  dispatch(addWrokspace(workspace.data))
  // return workspace.data
}
