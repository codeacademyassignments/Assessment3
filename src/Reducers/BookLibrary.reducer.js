import { combineReducers } from 'redux';

const {
  INITIALIZE_STATE,
} = require('../Actions/BookLibrary.action');

const books = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_STATE:
      return action.books;
    default:
      return state;
  }
};

const libraryApp = combineReducers({
  books,
});

export default libraryApp;
