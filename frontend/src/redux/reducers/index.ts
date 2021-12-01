import { combineReducers } from 'redux'
import activeWorkspaceReducer from './activeWorkspaceReducer'
import workspaceReducer from './workspaceReducer'
import activeWorkspaceBoardReducer from './activeWorkspaceBoardsReducer'

export default combineReducers({
  workspaces: workspaceReducer,
  activeWorkspace: activeWorkspaceReducer,
  activeWorkspaceBoard: activeWorkspaceBoardReducer,
})

