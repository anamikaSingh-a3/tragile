import { addActiveBoardsList, addList, resetActiveBoardsList } from '../action'
import { listApi } from '../../endpoints.ts'
import axios from 'axios'
import { IList } from 'tragile-list'


export const createListThunk = (requestBody: IList) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${listApi}/create`, requestBody)
    dispatch(addList(response.data))
    dispatch(addActiveBoardsList(response.data))
  } catch (error) {
    dispatch(resetActiveBoardsList())
  }
}