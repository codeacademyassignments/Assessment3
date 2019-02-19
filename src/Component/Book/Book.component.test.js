import React from 'react';
import renderer from 'react-test-renderer';
import Book from './Book.component';
import TestData from '../../TestData/TestData';

const blog = TestData['J K Rowling'][0];
describe('Section', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<Book rating={blog.rating} liked title={blog.Name} bookId={blog.id} />);
    expect(tree).toMatchSnapshot();
  });
});
