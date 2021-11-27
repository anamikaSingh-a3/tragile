import { combineReducers } from 'redux'
import activeBoardReducer from './activeBoardReducer'
import activeWorkspaceReducer from './activeWorkspaceReducer'
import boardsReducer from './boardsReducer'
import workspaceReducer from './workspaceReducer'

export default combineReducers({
  boards: boardsReducer,
  workspaces: workspaceReducer,
  activeWorkspace: activeWorkspaceReducer,
  activeBoard: activeBoardReducer,
})

export type TAppStateType = ReturnType<typeof combineReducers>
