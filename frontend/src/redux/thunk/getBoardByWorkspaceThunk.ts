import axios from 'axios'
import { boardApi } from '../../endpoints.ts'
import { addActiveBoards, resetActiveBoards } from '../action'

export const getBoardByWorkspaceThunk = (workspaceId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const board = await axios.get(`${boardApi}/getByWorkspace/${workspaceId}`)
    dispatch(addActiveBoards(board.data))
  } catch (error) {
    dispatch(resetActiveBoards())
  }
}
