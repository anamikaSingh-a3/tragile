import axios from 'axios'
import { boardApi } from '../../endpoints.ts'
import { addActiveWorkspaceBoard, resetActiveBoardsList, resetActiveWorkspaceBoard } from '../action'

export const getBoardByIdThunk = (boardId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const board = await axios.get(`${boardApi}/${boardId}`)
    dispatch(addActiveWorkspaceBoard(board.data))
    dispatch(resetActiveBoardsList())
  } catch (error) {
    dispatch(resetActiveWorkspaceBoard())
  }
}
