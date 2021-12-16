import axios from 'axios'
import { boardApi } from '../../../endpoints.ts'
import { addActiveWorkspaceBoard, resetActiveWorkspaceBoard } from '../../action/boardAction/boardActions'
import { resetActiveBoardsList } from '../../action/listAction/listActions'

export const getBoardByIdThunk = (boardId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const board = await axios.get(`${boardApi}/${boardId}`)
    console.log("board.data.payload)", board.data.payload)
    dispatch(addActiveWorkspaceBoard(board.data.payload))
    dispatch(resetActiveBoardsList())
  } catch (error) {
    dispatch(resetActiveWorkspaceBoard())
  }
}
