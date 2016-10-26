import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Search.scss';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import {updateBusinessPartnerSearchResults} from '../../actions';

class Search extends Component {
  componentWillMount() {
    this.props.updateBusinessPartnerSearchResults([]);
  }

  updateResults(event) {
    let search = event.target.value;
    let regex = new RegExp(search, "gi");

    let searchResults = this.props.searchableItems.filter((item) => {
      return regex.test(item.name);
    });

    this.props.updateBusinessPartnerSearchResults(searchResults);
  }

  render() {
    return (
        <div className="dc-search-form">
          <SearchBox
              onChangeAction={this.updateResults.bind(this)}
          />
          <SearchButton />
          {
            this.props.searchResults && this.props.searchResults.length > 0 &&
            <SearchResults
                searchResults={this.props.searchResults}
                onClickAction={this.props.onClickAction}
            />
          }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.businessPartners.businessPartnerSearchResults
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateBusinessPartnerSearchResults: (businessPartnerSearchResults) => {
      dispatch(updateBusinessPartnerSearchResults(businessPartnerSearchResults));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
