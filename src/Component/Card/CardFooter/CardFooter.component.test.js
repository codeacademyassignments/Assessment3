import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardFooter from './CardFooter.component';


describe('CardFooter', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<CardFooter liked title="Harry Potter and prisoner of azekaban" />);
    expect(tree).toMatchSnapshot();
  });
});

describe('mock function', () => {
  const onHeartClickMock = jest.fn();
  const wrapper = shallow(<CardFooter liked rating={4.5} onHeartClick={onHeartClickMock} />);
  it('should call onHeartClickMock when heart clicked', () => {
    wrapper.find('.heart').simulate('click');
    expect(onHeartClickMock).toHaveBeenCalledWith(true);
    expect(onHeartClickMock).toHaveBeenCalledTimes(1);
  });
});
