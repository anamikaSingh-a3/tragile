import api from '../../api/board'
import { addActiveBoards, resetActiveBoards } from '../action'

export const getBoardByWorkspaceThunk =
  (workspaceId: string) => async (dispatch: any, getState: any) => {
    // dispatch(resetActiveBoards)
    try {
      const board = await api.get(`/getByWorkspace/${workspaceId}`)
      console.log("resert test",board.data)
      dispatch(addActiveBoards(board.data))
    } catch (error) {
    dispatch(resetActiveBoards())
  }
}
