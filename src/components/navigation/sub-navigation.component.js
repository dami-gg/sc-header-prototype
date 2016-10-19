import React, {Component} from 'react';

import Applications from '../applications/applications.component';

class SubNavigation extends Component {
  render() {
    return (
        <div className="navigation navigation--sub dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <Applications/>
        </div>
    );
  }
}

export default SubNavigation;
