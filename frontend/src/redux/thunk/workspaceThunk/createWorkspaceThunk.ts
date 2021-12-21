import axios from 'axios';
import { IWorkspace } from 'tragile-workspace';

import { workspaceApi } from '../../../endpoints.ts';
import { addWorkspaces } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';
import config from '../header';

export const createWorkspaceThunk = (requestBody: IWorkspace) => async (
  dispatch: any
) => {
  try {
    const response = await axios.post(`${workspaceApi}/create`, requestBody, { ...config })
    if (response.status === 201) dispatch(addWorkspaces(response.data.payload))
    else dispatch(messageAction(response.data.message))
  } catch (error) {
    dispatch(messageAction('Workspace could not be created'))
  }
}
