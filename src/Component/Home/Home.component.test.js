import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import renderer from 'react-test-renderer';
import Home from './Home.component';
import testData from '../../TestData/TestData';

describe('Home Component', () => {
  it('snapshot should match', () => {
    const tree = renderer.create(<Home onDataFetched={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('componentDidMount', () => {
  let mockAxios;
  let mockFetchComplete;
  beforeAll(() => {
    mockAxios = jest.fn().mockImplementation(() => new Promise(((resolve) => { resolve({ data: testData }); })));
    axios.get = mockAxios;
    mockFetchComplete = jest.fn();
  });
  afterAll(() => {
    jest.resetModules();
  });
  it('should call all mock functions with proper arguements', async (done) => {
    const wrapper = shallow(<Home onDataFetched={mockFetchComplete} />);
    await wrapper.instance().componentDidMount();
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/allBooksWithRating');

    expect(mockFetchComplete).toHaveBeenCalledWith(testData);
    done();
  });
  it('should return empty object when fetchState is true', async () => {
    const wrapper = shallow(<Home books={testData} onDataFetched={mockFetchComplete} />);
    expect(await wrapper.instance().componentDidMount()).toEqual({});
  });
});
