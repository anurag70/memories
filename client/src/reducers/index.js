import { combineReducers } from "redux";

//here importing reducer from posts.js

import posts from "./posts";

//this reducer is used in the main parent index.js file
export const reducers = combineReducers({ posts });
