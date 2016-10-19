import React, {Component} from 'react';
import Product from '../product/product.component';

class Products extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink">
          <nav className="">
               { /* ng-class="{'shown-mobile': $ctrl.modulesMenuVisible}" */ }
            <ul className="">
              <Product />
            </ul>
          </nav>
        </div>
    );
  }
}

export default Products;
