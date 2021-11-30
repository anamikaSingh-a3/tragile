import { IList } from '../interfaces'
import api from '../../api/list'
import { addActiveBoardsList, addList } from '../action'

export const createListThunk = (requestBody: IList) => async (
  dispatch: any
) => {
  const response = await api.post('/create', requestBody)

  dispatch(addList(response.data))
  dispatch(addActiveBoardsList(response.data))
}
