import React from 'react';
import renderer from 'react-test-renderer';
import Section from './Section.component';
import TestData from '../../TestData/TestData';

const blog = TestData['J K Rowling'];
describe('Section', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<Section cards={blog} author="J K Rowling" />);
    expect(tree).toMatchSnapshot();
  });
});
