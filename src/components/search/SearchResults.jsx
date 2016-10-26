import React, {Component} from 'react';

import './Search.scss';

class SearchResults extends Component {
  render() {
    let resultNodes = this.props.results.map((result) => {
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
        <div>
          <ul className={'dc-list dc-suggest' + (this.props.results.length > 0 ? ' visible' : '')}>
            {resultNodes}
          </ul>
        </div>
    );
  }
}

export default SearchResults;
