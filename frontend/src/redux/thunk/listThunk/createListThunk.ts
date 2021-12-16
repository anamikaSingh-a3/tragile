import { addActiveBoardsList, addList, resetActiveBoardsList } from '../../action/listAction/listActions'
import { listApi } from '../../../endpoints.ts'
import axios from 'axios'
import { IList } from 'tragile-list'


export const createListThunk = (requestBody: IList) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${listApi}/create`, requestBody)
    dispatch(addList(response.data.payload))
    dispatch(addActiveBoardsList(response.data.payload))
  } catch (error) {
    dispatch(resetActiveBoardsList())
  }
}