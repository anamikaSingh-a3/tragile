import api from '../../api/board'
import { addActiveWorkspaceBoard } from '../action'
// import { addActiveBoards } from '../action'

export const getBoardByIdThunk = (boardId: string) =>async (dispatch: any, getState: any)=> {
  const board = await api.get(`/${boardId}`)
  console.log("get one board", board.data)
  dispatch(addActiveWorkspaceBoard(board.data))
}
