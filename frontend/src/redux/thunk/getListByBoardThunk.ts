import api from '../../api/list'
import { addActiveBoardsList, resetActiveBoardsList } from '../action/listActions'

export const getListByBoardThunk = (boardId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    
    const list = await api.get(`getByBoard/${boardId}`)
    dispatch(addActiveBoardsList(list.data))
  } catch (error) {
    dispatch(resetActiveBoardsList())
  }
}
