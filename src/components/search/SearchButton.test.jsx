import React from 'react';
import renderer from 'react-test-renderer';
import SearchButton from './SearchButton';

describe('SearchButton component', () => {
  it('should render correctly', () => {
    let tree = renderer.create(<SearchButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});