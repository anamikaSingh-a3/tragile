import axios from 'axios';

import { boardApi } from '../../../endpoints.ts';
import { addActiveBoards, resetActiveBoards, resetActiveBoardsList } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';

export const getBoardByWorkspaceThunk = (workspaceId: string) => async (
  dispatch: any,
) => {
  try {
    const board = await axios.get(`${boardApi}/getByWorkspace/${workspaceId}`)

    if (board.status === 200) {
      dispatch(addActiveBoards(board.data.payload))
    }
    else if (board.status === 204) dispatch(messageAction("No board found"))
  } catch (error) {
    dispatch(resetActiveBoards())
    dispatch(resetActiveBoardsList())
    dispatch(messageAction('Failed getAll Workspace API'))
  }
}
