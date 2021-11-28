import api from '../../api/workspace'
import { addWorkspaces } from '../action'

export const getAllWorkspacesThunk = () => async (dispatch: any) => {
  const workspace = await api.get('/getAll')
  console.log('worspace', workspace)
  console.log('worspace data', workspace.data)
  // if (workspace.data.length === 0) console.log('null')
  // else console.log('value')
  dispatch(addWorkspaces(workspace.data))
}
