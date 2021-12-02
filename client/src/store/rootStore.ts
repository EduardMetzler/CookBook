import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';


import { authReducer } from './auth/authReducer';
import { userDatenReducer } from './userDaten/userDatenReducer';



import { AppActions } from './model';

import { composeWithDevTools } from 'redux-devtools-extension';



const logger = createLogger();

export const rootReducer = combineReducers({ authReducer,userDatenReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
 
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
  )
);
