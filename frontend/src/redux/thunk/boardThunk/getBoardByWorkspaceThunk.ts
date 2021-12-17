import axios from 'axios';

import { boardApi } from '../../../endpoints.ts';
import { addActiveBoards, resetActiveBoards, resetActiveBoardsList } from '../../action';
import { errorMessage } from '../../action/errorAction';

export const getBoardByWorkspaceThunk = (workspaceId: string) => async (
  dispatch: any,
) => {
  try {
    const board = await axios.get(`${boardApi}/getByWorkspace/${workspaceId}`)

    if (board.status === 200) {
      dispatch(addActiveBoards(board.data.payload))
    }
    else if (board.status === 204) dispatch(errorMessage("No board found"))
  } catch (error) {
    dispatch(resetActiveBoards())
    dispatch(resetActiveBoardsList())
    dispatch(errorMessage('Failed getAll Workspace API'))
  }
}
