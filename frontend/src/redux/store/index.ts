import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'
import reducers from '../reducers';

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

//@ts-ignore
export const persistor = persistStore(store)
