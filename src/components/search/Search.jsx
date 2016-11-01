import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Search.scss';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import {updateBusinessPartnerSearchResults} from '../../actions';

export class Search extends Component {
  componentWillMount() {
    this.props.updateBusinessPartnerSearchResults([]);
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

  updateResults(event) {
    let search = event.target.value;
    let regex = new RegExp(search, "gi");

    let searchResults = this.props.searchableItems.filter((item) => {
      return regex.test(item.name);
    });

    this.props.updateBusinessPartnerSearchResults(searchResults);
  }
}

Search.propTypes = {
  searchableItems: React.PropTypes.array.isRequired,
  onClickAction: React.PropTypes.func
};

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
