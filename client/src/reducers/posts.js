import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

//reducrs are functions that take in the current state and an action and return a new state
//the current state always has a default value
//here direct use posts as here only 1 reducer is present which is posts

//here direct return as we are using it in index.js
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      //this action.payload is the original post
      return action.payload;
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    //new post stored in action.payload
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
