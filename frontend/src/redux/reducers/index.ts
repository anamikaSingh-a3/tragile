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
import UserTokenReducer from './userReducer/userTokenReducer';
import activeWorkspaceReducer from './workspaceReducer/activeWorkspaceReducer';
import workspaceReducer from './workspaceReducer/workspaceReducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loaderReducer from './loaderReducer/loaderReducer';
import logoutReducer from './userReducer/logoutReducer';
import { LOGOUT_USER } from '../types';
import { store } from '../store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loader', 'logout', 'user', 'token', 'userToken', 'boards', 'workspaces', 'list', 'activeWorkspace', 'activeWorkspaceBoard', 'activeBoard', 'activeBoardList', 'card', 'activeCard', 'activeList', 'message']
}

const rootReducer = combineReducers({
  loader: loaderReducer,
  logout: logoutReducer,
  user: addUserReducer,
  token: addTokenReducer,
  userToken: UserTokenReducer,
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

export default persistReducer(persistConfig, rootReducer)