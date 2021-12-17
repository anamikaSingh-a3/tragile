import axios from 'axios';

import { listApi } from '../../../endpoints.ts';
import { addActiveBoardsList, resetActiveBoardsList } from '../../action/listActions/listActions';
import { messageAction } from '../../action/messageActions/messageAction';

export const getListByBoardThunk = (board_id: string) => async (
  dispatch: any,
) => {
  try {
    const list = await axios.get(`${listApi}/getByBoard/${board_id}`)
    if (list.status === 200)
      dispatch(addActiveBoardsList(list.data.payload))
    else if (list.status === 204)
      dispatch(messageAction("No board found"))
  } catch (error) {
    dispatch(resetActiveBoardsList())
    dispatch(messageAction('Failed getAll list by board API'))
  }
}
