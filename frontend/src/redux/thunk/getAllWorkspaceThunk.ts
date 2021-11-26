import api from '../../api/workspace'
import { addWrokspace } from '../action'

// export const getAllWorkspaceThunk = () => async (dispatch: any) => {
//   const response = await api.get('/getAll')
// //   console.log('RESSSSs', response)
//   //   dispatch(addWrokspace(response.data))
//     return response.data
// }
export const getAllWorkspacesThunk = async () => {
  const workspace = await api.get('/getAll')
  console.log('Workspaces', workspace)
  return workspace.data
  // dispatch(addWrokspace(workspace.data))
  //   setArray(workspace.data)
}
