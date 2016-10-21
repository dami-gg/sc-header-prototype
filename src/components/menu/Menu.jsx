import React, {Component} from 'react';

import './Menu.scss';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    let key = 0;
    let menuItemNodes = this.props.menuItems.map((menuItem) => {
      return (
          <MenuItem
              menuItem={menuItem}
              key={menuItem.id || ++key}
              onClickAction={this.props.onClickAction}
              onHoverAction={this.props.onHoverAction}
              isSwitcher={this.props.isSwitcher}
          />
      );
    });

    return (
        <ul className="menu">
          {menuItemNodes}
        </ul>
    );
  }
}

export default Menu;
