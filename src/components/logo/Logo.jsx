import React, {Component} from 'react';

import './Logo.scss';

class Logo extends Component {
  render() {
    return (
        <div className="logo">
          <img src={this.props.source} alt="Logo" />
        </div>
    );
  }
}

export default Logo;


