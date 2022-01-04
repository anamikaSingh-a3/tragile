import axios from 'axios';

import { boardApi } from '../../../endpoints.ts';
import { addActiveBoards, resetActiveBoards, resetActiveBoardsList } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';
import config from '../header';

export const getBoardByWorkspaceThunk = (workspaceId: string) => async (
  dispatch: any,
) => {
  try {
    const board = await axios.get(`${boardApi}/getByWorkspace/${workspaceId}`, { ...config })

    if (board.status === 200) {
      dispatch(addActiveBoards(board.data.payload))
    }
    else if (board.status === 404) dispatch(messageAction("No board found"))
  } catch (error) {
    dispatch(resetActiveBoards())
    dispatch(resetActiveBoardsList())
    dispatch(messageAction('Failed getAll Workspace API'))
  }
}
