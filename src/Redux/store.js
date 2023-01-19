import {
  applyMiddleware,
  legacy_createStore,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./AuthContext/reducer";
import { reducer as FamilyReducer } from "./familyDrop/reducer"

const rootRuducer = combineReducers({ AuthReducer, FamilyReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootRuducer,
  composeEnhancers(applyMiddleware(thunk))
);
