import { IWorkspace } from '../interfaces'
import api from '../../api/workspace'
import { addWorkspaces } from '../action'

export const createWorkspaceThunk =
  (requestBody: IWorkspace) => async (dispatch: any) => {
    const response = await api.post('/create', requestBody)
    dispatch(addWorkspaces(response.data))
  }
