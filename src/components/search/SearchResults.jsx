import React, {Component} from 'react';

import './Search.scss';

class SearchResults extends Component {
  render() {
    let searchResultsNodes = this.props.searchResults.map((result) => {
      return (
          <li
              className="dc-suggest__item dc-link"
              onClick={() => {
                return this.props.onClickAction && this.props.onClickAction(result);
              }}
              key={result.id}
          >
            {result.name}
          </li>
      );
    });

    return (
        <ul className={'dc-list dc-suggest' + (this.props.searchResults.length > 0 ? ' visible' : '')}>
          {searchResultsNodes}
        </ul>
    );
  }
}

export default SearchResults;
