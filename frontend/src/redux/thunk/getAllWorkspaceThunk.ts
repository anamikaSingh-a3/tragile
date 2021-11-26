import api from '../../api/workspace'

export const getAllWorkspacesThunk = async () => {
  const workspace = await api.get('/getAll')
  return workspace.data
}
