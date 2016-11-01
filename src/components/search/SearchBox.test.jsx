import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

describe('SearchBox component', () => {
  it('should render correctly', () => {
    let tree = renderer.create(<SearchBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});