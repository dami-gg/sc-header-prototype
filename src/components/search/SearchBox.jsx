import React, {Component} from 'react';

import './Search.scss';

class SearchBox extends Component {
  render() {
    return (
        <input className="dc-input dc-search-form__input"
               onChange={(event) => {
                 return this.props.onChangeAction && this.props.onChangeAction(event)
               }}
               placeholder="Search..."
        />
    );
  }
}

SearchBox.propTypes = {
  onChangeAction: React.PropTypes.func
};

export default SearchBox;
