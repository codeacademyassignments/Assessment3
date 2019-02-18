import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card.component';
import TestData from '../../TestData/TestData';

const blog = TestData['J K Rowling'][0];
describe('Section', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<Card rating={blog.rating} liked title={blog.Name} bookId={blog.id} />);
    expect(tree).toMatchSnapshot();
  });
});
