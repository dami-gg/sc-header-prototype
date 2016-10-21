import React, {Component} from 'react';
import {connect} from 'react-redux';

import Menu from '../menu/Menu';

class Applications extends Component {
  getCurrentProduct() {
    return this.props.products.filter((product) => {
      return product.id === this.props.selectedProductId;
    })[0];
  }

  getCurrentProductApplications() {
    return this.getCurrentProduct() ? this.getCurrentProduct().applications : [];
  }

  navigateToApplication(clickedItem, event) {
    event.preventDefault();
    console.log('navigated to: ' + clickedItem.url);
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__applications">
          <nav className="navigation--menu">
            <Menu
                menuItems={this.getCurrentProductApplications()}
                onClickAction={this.navigateToApplication.bind(this)}
            />
          </nav>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProductId
});

export default connect(
    mapStateToProps
)(Applications);
