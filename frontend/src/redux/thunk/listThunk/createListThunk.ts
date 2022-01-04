import axios from 'axios';
import { IList } from 'tragile-list';

import { listApi } from '../../../endpoints.ts';
import { addActiveBoardsList, resetActiveBoardsList } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';
import config from '../header';


export const createListThunk = (requestBody: IList) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${listApi}/create`, requestBody, { ...config })
    if (response.status === 201) {
      dispatch(addActiveBoardsList(response.data.payload))
    }
    else dispatch(messageAction(response.data.message))
  } catch (error) {
    dispatch(messageAction('List could not be created'))
    dispatch(resetActiveBoardsList())
  }
}