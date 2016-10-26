import React, {Component} from 'react';

import './Search.scss';

class SearchBox extends Component {
  render() {
    return (
        <div className="dc-search-form">
          <input className="dc-input dc-search-form__input"
                 onChange={(event) => {
                   return this.props.onChangeAction && this.props.onChangeAction(event)
                 }}
                 type="search"
                 placeholder="Search..."/>
          <button className="dc-btn dc-search-form__btn">
            <i className="dc-icon dc-icon--search dc-icon--interactive"></i>
          </button>
        </div>
    );
  }
}

export default SearchBox;
