import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header.component';

describe('Header:', () => {
  it('should render previous snapshot', () => {
    const tree = renderer.create(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
