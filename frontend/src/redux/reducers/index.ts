import { combineReducers } from 'redux'
import activeWorkspaceReducer from './activeWorkspaceReducer'
import boardsReducer from './boardsReducer'
import workspaceReducer from './workspaceReducer'

export default combineReducers({
  boards: boardsReducer,
  workspaces: workspaceReducer,
  activeWorkspace: activeWorkspaceReducer,
})

export type TAppStateType = ReturnType<typeof combineReducers>
