import api from '../../api/board'
import { addActiveWorkspaceBoard } from '../action'

export const getBoardByIdThunk = (boardId: string) =>async (dispatch: any, getState: any)=> {
  const board = await api.get(`/${boardId}`)
  dispatch(addActiveWorkspaceBoard(board.data))
}
