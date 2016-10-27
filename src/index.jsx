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
      businessPartnerTypes: [businessPartnerTypes.BRAND, businessPartnerTypes.SUPPLIER]
    }, {
      id: 2,
      name: 'Analytics',
      url: '/analytics',
      businessPartnerTypes: [businessPartnerTypes.BRAND]
    }]
  },
  {
    id: 2,
    name: 'Insights',
    applications: [{
      id: 3,
      name: 'Coplanner',
      url: '/coplanner',
      businessPartnerTypes: [businessPartnerTypes.SUPPLIER]
    }]
  },
  {
    id: 3,
    name: 'Merchant center',
    applications: [{
      id: 4,
      name: 'Articles',
      url: '/articles',
      businessPartnerTypes: [businessPartnerTypes.MERCHANT]
    }, {
      id: 5,
      name: 'Orders',
      url: '/orders',
      businessPartnerTypes: [businessPartnerTypes.MERCHANT]
    }]
  }
];

var userBusinessPartners = [{
  id: 1,
  name: 'Adidas',
  types: [businessPartnerTypes.BRAND, businessPartnerTypes.MERCHANT, businessPartnerTypes.SUPPLIER]
}, {
  id: 2,
  name: 'Nike',
  types: [businessPartnerTypes.BRAND, businessPartnerTypes.SUPPLIER]
}, {
  id: 3,
  name: 'FourFlavor',
  types: [businessPartnerTypes.MERCHANT]
}, {
  id: 4,
  name: 'WarehouseOne',
  types: [businessPartnerTypes.MERCHANT]
}, {
  id: 5,
  name: 'GREENALITY',
  types: [businessPartnerTypes.MERCHANT]
}, {
  id: 6,
  name: 'Lea Trade Srl',
  types: [businessPartnerTypes.SUPPLIER]
}, {
  id: 7,
  name: 'Hirsch Fashion GmbH',
  types: [businessPartnerTypes.SUPPLIER]
}, {
  id: 8,
  name: 'Reebok',
  types: [businessPartnerTypes.BRAND]
}, {
  id: 9,
  name: 'Vans',
  types: [businessPartnerTypes.BRAND]
}, {
  id: 10,
  name: 'Ray-Ban',
  types: [businessPartnerTypes.BRAND]
}, {
  id: 11,
  name: 'Tommy Hilfiger',
  types: [businessPartnerTypes.BRAND]
}, {
  id: 12,
  name: 'Eterna',
  types: [businessPartnerTypes.MERCHANT]
}, {
  id: 13,
  name: 'Roberto Collina SRL',
  types: [businessPartnerTypes.SUPPLIER]
}, {
  id: 14,
  name: 'fashion4home GmbH',
  types: [businessPartnerTypes.SUPPLIER]
}];

var user = {
  id: 1,
  firstName: 'Chuck',
  lastName: 'Norris',
  email: 'chuck.norris@solutions.zalando.com'
};

ReactDOM.render(
    <Provider store={store}>
      <div>
        <Header
            products={products}
            user={user}
            userBusinessPartners={userBusinessPartners}
        />
        <ServiceProvider products={products}/>
      </div>
    </Provider>,
    document.getElementById('root')
);
