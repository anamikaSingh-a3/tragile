import axios from 'axios';

import { workspaceApi } from '../../../endpoints.ts';
import { addWorkspaces } from '../../action';
import { messageAction } from '../../action/messageActions/messageAction';

export const getAllWorkspacesThunk = () => async (dispatch: any) => {
  try {
    const workspace = await axios.get(`${workspaceApi}/getAll`)
    if (workspace.status === 200)
      dispatch(addWorkspaces(workspace.data.payload))
    else
      dispatch(messageAction(workspace.data.message))
  } catch (error) {
    dispatch(messageAction("Failed getAll Workspace API"))
  }
}