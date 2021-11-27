import api from '../../api/board'
import { addActiveBoards } from '../action'

export const getBoardByWorkspaceThunk =
  (workspaceId: string) => async (dispatch: any, getState: any) => {
    const board = await api.get(`/getByWorkspace/${workspaceId}`)
    dispatch(addActiveBoards(board.data))
  }
