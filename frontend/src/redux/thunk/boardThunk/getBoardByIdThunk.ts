import axios from 'axios';

import { boardApi } from '../../../endpoints.ts';
import { addActiveWorkspaceBoard, resetActiveBoardsList, resetActiveWorkspaceBoard } from '../../action';
import { errorMessage } from '../../action/errorAction';

export const getBoardByIdThunk = (boardId: string) => async (
  dispatch: any,
) => {
  try {
    const board = await axios.get(`${boardApi}/${boardId}`)

    if (board.status === 200) {
      dispatch(addActiveWorkspaceBoard(board.data.payload))
      dispatch(resetActiveBoardsList())
    }
    else if (board.status === 204)
      dispatch(errorMessage("No board found"))
  } catch (error) {
    dispatch(resetActiveWorkspaceBoard())
    dispatch(errorMessage("Failed get board API'"))
  }
}
