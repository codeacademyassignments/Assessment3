import React from 'react';
import renderer from 'react-test-renderer';
import BookGroupByAuthor from './BookGroupByAuthor.component';
import TestData from '../../TestData/TestData';

const books = TestData['J K Rowling'];
describe('Section', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<BookGroupByAuthor books={books} author="J K Rowling" />);
    expect(tree).toMatchSnapshot();
  });
});
