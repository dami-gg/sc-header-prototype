import React, {Component} from 'react';

import './product.scss';

class Product extends Component {
  render() {
    return(
        <li className="menu__item"> { /*ng-if="!module.hidden"*/}
          <a className="menu__link"
             href> { /* TODO Add onClick event to go to open submenu" */ } { /* ng-class="{'menu__link--highlighted': module.id === $ctrl.currentModule}" */ }
            {this.props.product.name}
          </a>
        </li>
    );
  }
}

export default Product;
