import { combineReducers } from 'redux'
import activeWorkspaceReducer from './activeWorkspaceReducer'
import workspaceReducer from './workspaceReducer'
import activeWorkspaceBoardReducer from './activeWorkspaceBoardsReducer'
import activeBoardListReducer from './activeBoardListReducer'

export default combineReducers({
  workspaces: workspaceReducer,
  activeWorkspace: activeWorkspaceReducer,
  activeWorkspaceBoard: activeWorkspaceBoardReducer,
  activeBoardList : activeBoardListReducer,

})

