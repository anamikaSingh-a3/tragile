import axios from 'axios';

import { boardApi } from '../../../endpoints.ts';
import { addActiveWorkspaceBoard, resetActiveBoardsList, resetActiveWorkspaceBoard } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';
import config from '../header';

export const getBoardByIdThunk = (boardId: string) => async (
  dispatch: any,
) => {
  try {
    const board = await axios.get(`${boardApi}/${boardId}`, { ...config })

    if (board.status === 200) {
      dispatch(addActiveWorkspaceBoard(board.data.payload))
      dispatch(resetActiveBoardsList())
    }
    else if (board.status === 404)
      dispatch(messageAction("No board found"))
  } catch (error) {
    dispatch(resetActiveWorkspaceBoard())
    dispatch(messageAction("Failed get board API'"))
  }
}
