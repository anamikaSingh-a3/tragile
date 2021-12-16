import { addActiveBoardsList, addList, resetActiveBoardsList } from '../../action'
import { listApi } from '../../../endpoints.ts'
import axios from 'axios'
import { IList } from 'tragile-list'
import { errorMessage } from '../../action/errorAction'


export const createListThunk = (requestBody: IList) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${listApi}/create`, requestBody)
    if (response.status === 201) {
      // dispatch(addList(response.data))
      dispatch(addActiveBoardsList(response.data.payload))
    }
    else dispatch(errorMessage(response.data.message))
  } catch (error) {
    dispatch(errorMessage('List could not be created'))
    dispatch(resetActiveBoardsList())
  }
}