import { combineReducers } from 'redux';

const {
  SET_STATE, INITIALIZE_STATE,
} = require('../Actions/BookLibrary.action');

const fetchState = (state = false, action) => {
  switch (action.type) {
    case SET_STATE:
      return !state;
    default:
      return state;
  }
};

const blogs = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_STATE:
      return action.blogs;
    default:
      return state;
  }
};

const libraryApp = combineReducers({
  fetchState,
  blogs,
});

export default libraryApp;
