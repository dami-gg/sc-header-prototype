import React, {Component} from 'react';

import './MenuItem.scss';

class MenuItem extends Component {
  render() {
    return (
        <li className="menu__item"> { /*ng-if="!module.hidden"*/}
          <a className="menu__link"
             onClick={event => {this.props.onClickAction(this.props.menuItem, event); }}
             href> { /* ng-class="{'menu__link--highlighted': module.id === $ctrl.currentModule}" */ } {/* onClick pass event from parents */}
            {this.props.menuItem.name}
          </a>
        </li>
    );
  }
}

export default MenuItem;

