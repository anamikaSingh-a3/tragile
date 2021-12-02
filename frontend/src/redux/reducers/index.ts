import { combineReducers } from 'redux'
import activeWorkspaceReducer from './activeWorkspaceReducer'
import workspaceReducer from './workspaceReducer'
import activeWorkspaceBoardReducer from './activeWorkspaceBoardsReducer'
import activeBoardListReducer from './activeBoardListReducer'
import activeListReducer from './activeListReducer'
import listReducer from './listReducer'

export default combineReducers({
  workspaces: workspaceReducer,
  list: listReducer,
  activeWorkspace: activeWorkspaceReducer,
  activeWorkspaceBoard: activeWorkspaceBoardReducer,
  activeBoardList : activeBoardListReducer,
  activeList: activeListReducer,

})

