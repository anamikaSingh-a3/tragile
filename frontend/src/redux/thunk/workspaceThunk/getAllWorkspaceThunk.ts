import axios from 'axios';

import { workspaceApi } from '../../../endpoints.ts';
import { addWorkspaces } from '../../action';
import { errorMessage } from '../../action/errorAction';

export const getAllWorkspacesThunk = () => async (dispatch: any) => {
  try {
    const workspace = await axios.get(`${workspaceApi}/getAll`)
    if (workspace.status === 200)
      dispatch(addWorkspaces(workspace.data.payload))
    else
      dispatch(errorMessage(workspace.data.message))
  } catch (error) {
    dispatch(errorMessage("Failed getAll Workspace API"))
  }
}