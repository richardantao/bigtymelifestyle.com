import { combineReducers } from "redux";

import auth from "./auth";
import error from "./errors";
import post from "./posts";

export default combineReducers({ auth, error, post });