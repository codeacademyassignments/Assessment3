import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BookFooter from './BookFooter.component';


describe('BookFooter', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<BookFooter liked title="Harry Potter and prisoner of azekaban" rating={4.3} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('mock function', () => {
  const onHeartClickMock = jest.fn();
  const wrapper = shallow(<BookFooter liked rating={4.5} onHeartClick={onHeartClickMock} />);
  it('should call onHeartClickMock when heart clicked', () => {
    wrapper.find('.heart').simulate('click');
    expect(onHeartClickMock).toHaveBeenCalledWith(true);
    expect(onHeartClickMock).toHaveBeenCalledTimes(1);
  });
});
