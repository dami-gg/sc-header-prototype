import React, {Component} from 'react';

import './MenuItem.scss';

class MenuItem extends Component {
  render() {
    return (
        <li className="menu__item"
            onMouseOver={event => {
              return this.props.onHoverAction && this.props.onHoverAction(this.props.menuItem, event);
            }}
        > { /*ng-if="!module.hidden"*/}
          <a className={'menu__item__link' + (this.props.isHighlighted ? ' menu__item__link--highlighted' : '')}
             onClick={event => {
               return this.props.onClickAction && this.props.onClickAction(this.props.menuItem, event);
             }}
             href>
            <span className={'menu__item__name' + (this.props.isSwitcher ? ' menu__item__name--switcher' : '')}>
              {this.props.menuItem.name}
            </span>
          </a>
        </li>
    );
  }
}

export default MenuItem;

