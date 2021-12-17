import { combineReducers } from 'redux';

import activeBoardListReducer from './activeBoardListReducer';
import activeBoardReducer from './activeBoardReducer';
import activeCardReducer from './activeCardReducer';
import activeListReducer from './activeListReducer';
import activeWorkspaceBoardReducer from './activeWorkspaceBoardsReducer';
import activeWorkspaceReducer from './activeWorkspaceReducer';
import boardsReducer from './boardsReducer';
import cardReducer from './cardReducer';
import listReducer from './listReducer';
import errorReducer from './messageReducer';
import addTokenReducer from './tokenReducer';
import addUserReducer from './userReducer';
import workspaceReducer from './workspaceReducer';

export default combineReducers({
  user: addUserReducer,
  token: addTokenReducer,
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
  message: errorReducer
})

