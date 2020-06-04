import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import errors from "./errors/reducer";
import posts from "./posts/reducer";

const rootReducer = combineReducers({ errors, posts });

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);