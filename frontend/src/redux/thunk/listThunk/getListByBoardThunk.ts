import axios from 'axios'
import { listApi } from '../../../endpoints.ts'
import {
  addActiveBoardsList,
  resetActiveBoardsList
} from '../../action/listAction/listActions'

export const getListByBoardThunk = (boardId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const list = await axios.get(`${listApi}/getByBoard/${boardId}`)
    dispatch(addActiveBoardsList(list.data.payload))
  } catch (error) {
    dispatch(resetActiveBoardsList())
  }
}
