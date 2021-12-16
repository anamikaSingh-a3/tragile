import axios from 'axios'
import { listApi } from '../../../endpoints.ts'
import { errorMessage } from '../../action/errorAction'
import {
  addActiveBoardsList,
  resetActiveBoardsList
} from '../../action/listActions'

export const getListByBoardThunk = (board_id: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const list = await axios.get(`${listApi}/getByBoard/${board_id}`)
    if (list.status === 200)
      dispatch(addActiveBoardsList(list.data.payload))
    else if (list.status === 204)
      dispatch(errorMessage("No board found"))
  } catch (error) {
    dispatch(resetActiveBoardsList())
    dispatch(errorMessage('Failed getAll list by board API'))
  }
}
