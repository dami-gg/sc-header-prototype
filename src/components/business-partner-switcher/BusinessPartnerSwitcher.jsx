import React, {Component} from 'react';
import './BusinessPartnerSwitcher.scss';

class BusinessPartnerSwitcher extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink bp-switcher"> { /* ng-if="$ctrl.showBrandSwitcher" */}

          <a
             title="Switch Brand"
             href> { /* ng-click="$ctrl.toggleMenu('brand')" */ }
          <span className="bp-switcher__bp-name"> { /* ng-if="$ctrl.brand" */}
            ADIDAS { /*{$ctrl.brand.name} */}
          </span>
          </a>
        </div>
    );
  }
}

export default BusinessPartnerSwitcher;
