import React, {Component} from 'react';

import Product from '../product/Product';
import './Products.scss';

class Products extends Component {
  render() {
    var productNodes = this.props.products.map((product) => {
      return (
          <Product product={product} key={product.id} />
      );
    });

    return (
        <div className="dc-column dc-column--shrink sc-header__products">
          <nav className="navigation--global navigation--sub navigation--left">
            <ul className="menu">
              {productNodes}
            </ul>
          </nav>
        </div>
    );
  }
}

export default Products;
