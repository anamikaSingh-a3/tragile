import { combineReducers } from 'redux';

import activeBoardReducer from './boardReducer/activeBoardReducer';
import activeWorkspaceBoardReducer from './boardReducer/activeWorkspaceBoardsReducer';
import boardsReducer from './boardReducer/boardsReducer';
import activeCardReducer from './cardReducer/activeCardReducer';
import cardReducer from './cardReducer/cardReducer';
import activeBoardListReducer from './listReducer/activeBoardListReducer';
import activeListReducer from './listReducer/activeListReducer';
import listReducer from './listReducer/listReducer';
import errorReducer from './messageReducer/messageReducer';
import addTokenReducer from './userReducer/tokenReducer';
import addUserReducer from './userReducer/userReducer';
import activeWorkspaceReducer from './workspaceReducer/activeWorkspaceReducer';
import workspaceReducer from './workspaceReducer/workspaceReducer';

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

