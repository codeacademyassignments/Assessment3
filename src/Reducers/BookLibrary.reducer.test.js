import libraryApp from './BookLibrary.reducer';
import testData from '../TestData/TestData';
import {
  SET_STATE, INITIALIZE_STATE,
} from '../Actions/BookLibrary.action';

describe('LibraryReducer', () => {
  it('should set the fetchState of store', () => {
    expect(libraryApp(false, { type: SET_STATE }).fetchState).toEqual(true);
  });
  it('should initialize the store with passed blog data', () => {
    expect(libraryApp(testData, { type: INITIALIZE_STATE, blogs: testData }).blogs).toEqual(testData);
  });
});
