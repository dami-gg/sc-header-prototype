import React, {Component} from 'react';

import './Search.scss';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

class Search extends Component {
  update(event) {
    let search = event.target.value;
    let regex = new RegExp(search, "gi");

    this.props.results = this.props.searchableItems.find((item) => {
      return regex.test(item.name);
    });
  }

  render() {
    return (
        <div>
          <SearchBox
              onChange={this.props.update}
          />
          <SearchResults
              results={this.props.results || []}
          />
        </div>
    );
  }
}

export default Search;
