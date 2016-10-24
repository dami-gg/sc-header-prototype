import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import './assets/styles/main.scss';
import Header from './components/header/Header'
import ServiceProvider from './components/service-provider/ServiceProvider';
import * as businessPartnerTypes from './constants/BusinessPartnerTypes';
import scHeaderReducers from './reducers';

let store = createStore(scHeaderReducers);

var products = [
  {
    id: 1,
    name: 'Content',
    applications: [{
      id: 1,
      name: 'CMS',
      url: '/cms',
      businessPartnerType: businessPartnerTypes.BRAND
    }, {
      id: 2,
      name: 'Analytics',
      url: '/analytics',
      businessPartnerType: businessPartnerTypes.BRAND
    }]
  },
  {
    id: 2,
    name: 'Insights',
    applications: [{
      id: 3,
      name: 'Coplanner',
      url: '/coplanner',
      businessPartnerType: businessPartnerTypes.SUPPLIER
    }]
  },
  {
    id: 3,
    name: 'Merchant center',
    applications: [{
      id: 4,
      name: 'Articles',
      url: '/articles',
      businessPartnerType: businessPartnerTypes.MERCHANT
    }, {
      id: 5,
      name: 'Orders',
      url: '/orders',
      businessPartnerType: businessPartnerTypes.MERCHANT
    }]
  }
];

var userBrands = [{
  id: 1,
  name: 'Adidas'
}, {
  id: 2,
  name: 'Nike'
}, {
  id: 9,
  name: 'Reebok'
}, {
  id: 10,
  name: 'Vans'
}, {
  id: 11,
  name: 'Ray-Ban'
}, {
  id: 12,
  name: 'Tommy Hilfiger'
}];

var userMerchants = [{
  id: 3,
  name: 'Merchant 1'
}, {
  id: 4,
  name: 'Merchant 2'
}, {
  id: 5,
  name: 'Merchant 3'
}, {
  id: 13,
  name: 'Merchant 4'
}, {
  id: 14,
  name: 'Merchant 5'
}];

var userSuppliers = [{
  id: 6,
  name: 'Supplier 1'
}, {
  id: 7,
  name: 'Supplier 2'
}, {
  id: 15,
  name: 'Supplier 3'
}, {
  id: 16,
  name: 'Supplier 4'
}, {
  id: 17,
  name: 'Supplier 5'
}];

var user = {
  id: 1,
  firstName: 'Chuck',
  lastName: 'Norris',
  email: 'chuck.norris@solutions.zalando.com'
};

var lastAccessedBrands = [{
  id: 9,
  name: 'Reebok'
}, {
  id: 10,
  name: 'Vans'
}, {
  id: 11,
  name: 'Ray-Ban'
}];

var lastAccessedMerchants = [{
  id: 5,
  name: 'Merchant 3'
}, {
  id: 13,
  name: 'Merchant 4'
}];

var lastAccessedSuppliers = [{
  id: 7,
  name: 'Supplier 2'
}, {
  id: 15,
  name: 'Supplier 3'
}];

ReactDOM.render(
    <Provider store={store}>
      <div>
        <Header
            products={products}
            user={user}
            userBrands={userBrands}
            userMerchants={userMerchants}
            userSuppliers={userSuppliers}
            lastAccessedBrands={lastAccessedBrands}
            lastAccessedMerchants={lastAccessedMerchants}
            lastAccessedSuppliers={lastAccessedSuppliers}
        />
        <ServiceProvider products={products}/>
      </div>
    </Provider>,
    document.getElementById('root')
);
