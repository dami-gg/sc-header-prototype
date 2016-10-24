import React, {Component} from 'react';

import './Search.scss';

class Search extends Component {
  render() {
    let resultNodes = this.props.results.map((result) => {
      return (
          <li>{result.name}</li>
      );
    });

    return (
        <div>
          <ul>
            {resultNodes}
          </ul>
        </div>
    );
  }
}

export default Search;
