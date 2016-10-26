import React, {Component} from 'react';

import './Search.scss';

class SearchButton extends Component {
  render() {
    return (
        <button className="dc-btn dc-search-form__btn">
          <i className="dc-icon dc-icon--search dc-icon--interactive"></i>
        </button>
    );
  }
}

export default SearchButton;
