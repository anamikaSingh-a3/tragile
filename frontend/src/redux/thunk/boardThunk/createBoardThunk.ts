import axios from 'axios';
import { IBoard } from 'tragile-board';

import { boardApi } from '../../../endpoints.ts';
import { addActiveBoards, resetActiveBoards } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';
import config from '../header';

export const createBoardThunk = (requestBody: IBoard) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${boardApi}/create`, requestBody, { ...config })
    if (response.status === 201) {
      dispatch(addActiveBoards(response.data.payload))
    } else dispatch(messageAction(response.data.message))
  } catch (error) {
    dispatch(messageAction('Board could not be created'))
    dispatch(resetActiveBoards())
  }
}
