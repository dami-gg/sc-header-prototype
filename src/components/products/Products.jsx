import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Products.scss';
import Menu from '../menu/Menu';
import {toggleApplicationsMenu, changeSelectedProduct, resetSelectedProduct} from '../../actions';

class Products extends Component {
  switchMenu(clickedProduct) {
    // If the submenu is opened
    if (this.props.applicationsMenuShown) {
      // If the clicked product is the one that was shown, close the submenu
      if (this.props.selectedProductId === clickedProduct.id) {
        this.props.toggleApplicationsMenu();
        this.props.resetSelectedProduct();
      }
      // If not, switch to the clicked one
      else {
        this.props.changeShownProduct(clickedProduct);
      }
    }

    // If the submenu is closed, open it and update the shown product
    else {
      this.props.toggleApplicationsMenu();
      this.props.changeShownProduct(clickedProduct);
    }
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__products">
          <nav className="navigation--menu">
            <Menu
                menuItems={this.props.products}
                onClickAction={this.switchMenu.bind(this)}
                isSwitcher={true}
                highlightedItemId={this.props.currentProductId}
                highlightedClass={'bold'}
            />
          </nav>
        </div>
    );
  }
}

Products.propTypes = {
  products: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
  applicationsMenuShown: state.visibility.applicationsMenuShown,
  currentProductId: state.navigation.currentProduct && state.navigation.currentProduct.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApplicationsMenu: () => {
      dispatch(toggleApplicationsMenu());
    },

    changeShownProduct: (product) => {
      dispatch(changeSelectedProduct(product));
    },

    resetSelectedProduct: () => {
      dispatch(resetSelectedProduct());
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);


