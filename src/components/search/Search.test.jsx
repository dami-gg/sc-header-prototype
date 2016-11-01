import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import {Search} from './Search';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';

const mockedSearchResults = [{
  id: 1,
  name: 'Result 1'
}, {
  id: 2,
  name: 'Result 2'
}];

function setup(hideSearchResults) {
  const props = {
    // State props
    searchResults: hideSearchResults ? [] : mockedSearchResults,

    // Dispatch props
    updateBusinessPartnerSearchResults: jest.fn()
  };

  const enzymeWrapper = shallow(
      <Search
          searchableItems={[]}
          {...props}
      />
  );

  return {
    props,
    enzymeWrapper
  }
}

describe('Search component', () => {
  it('should render correctly', () => {
    const { enzymeWrapper } = setup();

    expect(shallowToJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should render the SearchBox sub component', () => {
    const { enzymeWrapper } = setup();

    const searchBox = enzymeWrapper.find(SearchBox);
    expect(searchBox).not.toBeUndefined();

    const searchBoxProps = searchBox.props();
    expect(searchBoxProps.onChangeAction).toBeTruthy();
  });

  it('should render the SearchButton sub component', () => {
    const { enzymeWrapper } = setup();

    const searchButton = enzymeWrapper.find(SearchButton);
    expect(searchButton).not.toBeUndefined();
  });

  xit('should render the SearchResults sub component when there are search results to show', () => {
    const { enzymeWrapper } = setup();

    const searchResults = enzymeWrapper.find(SearchResults);
    expect(searchResults).not.toBeUndefined();

    const searchResultsProps = searchResults.props();
    expect(searchResultsProps.searchResults).toBeTruthy();
    expect(searchResultsProps.onClickAction).toBeTruthy();
  });

  xit('should not render the SearchResults sub component when there are no search results to show', () => {
    const { enzymeWrapper } = setup(true);

    const searchResults = enzymeWrapper.find(SearchResults);
    expect(searchResults).toBeUndefined();
  });

  it('should update the results after the SearchBox sub component triggers an onChangeAction event', () => {
    const { enzymeWrapper, props } = setup();
    const mockedEvent = {
      target: {
        value: 'Result 1'
      }
    };

    const searchBox = enzymeWrapper.find(SearchBox);
    searchBox.props().onChangeAction(mockedEvent);

    expect(props.updateBusinessPartnerSearchResults.mock.calls).toBeDefined();
  });
});