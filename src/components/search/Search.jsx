import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Search.scss';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import {updateBusinessPartnerSearchResults} from '../../actions';

class Search extends Component {
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
        <div className="search-form">
          <SearchBox
              onChangeAction={this.updateResults.bind(this)}
          />
          <SearchResults
              results={this.props.businessPartnerSearchResults}
              onClickAction={this.props.onClickAction}
          />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  businessPartnerSearchResults: state.businessPartnerSearch.businessPartnerSearchResults
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
