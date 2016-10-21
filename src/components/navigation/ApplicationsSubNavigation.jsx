import React, {Component} from 'react';

import './Navigation.scss';
import Applications from '../applications/Applications';

class ApplicationsSubNavigation extends Component {
  render() {
    return (
        <div className="navigation dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <Applications products={this.props.products} />
        </div>
    );
  }
}

export default ApplicationsSubNavigation;


