import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import HomeContainer from './Home.container';
import HomeComponent from '../Component/Home/Home.component';

const storeFake = state => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});
const store = storeFake({});

describe('Home Container', () => {
  it('Snapshot should match with old snapshot', () => {
    const render = renderer.create(<Provider store={store}><HomeContainer /></Provider>);
    expect(render).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  const wrapper = mount(<Provider store={store}><HomeContainer /></Provider>);
  const HomeContainerWrapper = wrapper.find(HomeContainer);
  const HomeComponentWrapper = HomeContainerWrapper.find(HomeComponent);
  it('HomeContainer and HomeComponent both should be rendered', () => {
    expect(HomeComponentWrapper.length).toBeTruthy();
    expect(HomeContainer.length).toBeTruthy();
  });
  it('should map dispatches to props', () => {
    const expectedAttributes = ['onDataStoreComplete', 'onDataFetched'];
    expect(Object.keys(HomeComponentWrapper.props())).toEqual(
      expect.arrayContaining(expectedAttributes),
    );
  });
});

describe('mapStateToProps', () => {
  const wrapper = mount(<Provider store={store}><HomeContainer /></Provider>);
  const HomeContainerWrapper = wrapper.find(HomeContainer);
  const HomeComponentWrapper = HomeContainerWrapper.find(HomeComponent);
  const expectedAttributes = ['blogs', 'fetchState'];
  expect(Object.keys(HomeComponentWrapper.props())).toEqual(
    expect.arrayContaining(expectedAttributes),
  );
});
