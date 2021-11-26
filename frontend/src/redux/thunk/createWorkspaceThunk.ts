import { IWorkspace } from '../interfaces'
import api from '../../api/workspace'
import { addWrokspace } from '../action'

export const createWorkspaceThunk =
  (requestBody: IWorkspace) => async (dispatch: any) => {
    console.log('reqbodyThunk', requestBody)
    const response = await api.post('/create', requestBody)
    console.log('RESSSSs', response)
    dispatch(addWrokspace(response.data))
  }
