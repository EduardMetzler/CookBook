import { combineReducers } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

const epic = combineEpics();

const epicDependencies = {};
const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });

export const configureStore = () => {
  const store = createStore(
    combineReducers({}),
    undefined,
    composeWithDevTools(compose(applyMiddleware(epicMiddleware)))
  );
  epicMiddleware.run(epic);

  return store;
};
