import { combineReducers } from 'redux'
import activeWorkspaceReducer from './activeWorkspaceReducer'
import workspaceReducer from './workspaceReducer'
import activeWorkspaceBoardReducer from './activeWorkspaceBoardsReducer'
import activeBoardListReducer from './activeBoardListReducer'
import boardsReducer from './boardsReducer'
import listReducer from './listReducer'
import activeBoardReducer from './activeBoardReducer'
import cardReducer from './cardReducer'
import activeCardReducer from './activeCardReducer'
import activeListReducer from './activeListReducer'
import errorReducer from './errorReducer';

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
  errorMessage: errorReducer
})

