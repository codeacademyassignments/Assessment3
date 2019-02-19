import libraryApp from './BookLibrary.reducer';
import testData from '../TestData/TestData';
import {
  INITIALIZE_STATE,
} from '../Actions/BookLibrary.action';

describe('LibraryReducer', () => {
  it('should initialize the store with passed blog data', () => {
    expect(
      libraryApp(testData, { type: INITIALIZE_STATE, books: testData }).books,
    ).toEqual(testData);
  });
});
