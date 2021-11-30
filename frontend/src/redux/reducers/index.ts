import { combineReducers } from 'redux'
import activeBoardReducer from './activeBoardReducer'
import activeWorkspaceReducer from './activeWorkspaceReducer'
import boardsReducer from './boardsReducer'
import workspaceReducer from './workspaceReducer'
import listReducer from './listReducer'
import activeWorkspaceBoardReducer from './activeWorkspaceBoardsReducer'
import activeBoardListReducer from './activeBoardListReducer';
import cardReducer from './cardReducer';
import activeListReducer from './activeListReducer'
import activeCardReducer from './activeCardReducer'


export default combineReducers({
  boards: boardsReducer,
  workspaces: workspaceReducer,
  list: listReducer,
  activeWorkspace: activeWorkspaceReducer,
  activeWorkspaceBoard: activeWorkspaceBoardReducer,
  activeBoard : activeBoardReducer,
  activeBoardList : activeBoardListReducer,
  card: cardReducer,
  activeCard: activeCardReducer,
  activeList: activeListReducer,
})

export type TAppStateType = ReturnType<typeof combineReducers>
