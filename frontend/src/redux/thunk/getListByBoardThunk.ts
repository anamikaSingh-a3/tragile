import axios from 'axios'
import { listApi } from '../../endpoints.ts'
import {
  addActiveBoardsList,
  resetActiveBoardsList
} from '../action/listActions'

export const getListByBoardThunk = (boardId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const list = await axios.get(`${listApi}/getByBoard/${boardId}`)
    dispatch(addActiveBoardsList(list.data))
  } catch (error) {
    dispatch(resetActiveBoardsList())
  }
}
