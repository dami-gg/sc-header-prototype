import React from 'react';
import renderer from 'react-test-renderer';
import SearchResults from './SearchResults';

let mockedSearchResults = [{
  id: 1,
  name: 'Result 1'
}, {
  id: 2,
  name: 'Result 2'
}];

describe('SearchResults component', () => {
  it('should render correctly', () => {
    let tree = renderer.create(<SearchResults searchResults={mockedSearchResults} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});