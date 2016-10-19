import React, {Component} from 'react';

import Applications from '../applications/applications.component';
import './navigation.scss';

class SubNavigation extends Component {
  render() {
    return (
        <div className="navigation dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <Applications/>
        </div>
    );
  }
}

export default SubNavigation;
