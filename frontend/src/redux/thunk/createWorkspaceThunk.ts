import { IWorkspace } from '../interfaces'
import api from '../../api/workspace'
import { addWrokspace } from '../action'

export const createWorkspaceThunk =
  (requestBody: IWorkspace) => async (dispatch: any) => {
    const response = await api.post('/create', requestBody)
    dispatch(addWrokspace(response.data))
  }
