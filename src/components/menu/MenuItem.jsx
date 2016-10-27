import React, {Component} from 'react';

import './MenuItem.scss';

class MenuItem extends Component {
  render() {
    return (
        <li className="menu__item"
            onMouseOver={event => {
              event.preventDefault();
              return this.props.onHoverAction && this.props.onHoverAction(this.props.menuItem);
            }}
        > { /*ng-if="!module.hidden"*/}
          <a className={'menu__item__link' +
          (this.props.isHighlighted ? (' menu__item__link--' + this.props.highlightedClass) : '')}
             onClick={event => {
               event.preventDefault();
               return this.props.onClickAction && this.props.onClickAction(this.props.menuItem);
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

MenuItem.propTypes = {
  menuItem: React.PropTypes.object.isRequired,
  onClickAction: React.PropTypes.func,
  onHoverAction: React.PropTypes.func,
  isSwitcher: React.PropTypes.bool,
  isHighlighted: React.PropTypes.bool,
  highlightedClass: React.PropTypes.string
};

export default MenuItem;

