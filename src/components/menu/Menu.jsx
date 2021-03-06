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
              isHighlighted={this.props.highlightedItemId && menuItem.id === this.props.highlightedItemId}
              highlightedClass={this.props.highlightedClass}
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

Menu.propTypes = {
  menuItems: React.PropTypes.array.isRequired,
  onClickAction: React.PropTypes.func,
  onHoverAction: React.PropTypes.func,
  isSwitcher: React.PropTypes.bool,
  highlightedItemId: React.PropTypes.number,
  highlightedClass: React.PropTypes.string
};

export default Menu;
