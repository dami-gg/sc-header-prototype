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

var userBusinessPartners = [{
  id: 1,
  name: 'Adidas',
  type: businessPartnerTypes.BRAND
}, {
  id: 2,
  name: 'Nike',
  type: businessPartnerTypes.BRAND
}, {
  id: 3,
  name: 'Merchant 1',
  type: businessPartnerTypes.MERCHANT
}, {
  id: 4,
  name: 'Merchant 2',
  type: businessPartnerTypes.MERCHANT
}, {
  id: 5,
  name: 'Merchant 3',
  type: businessPartnerTypes.MERCHANT
}, {
  id: 6,
  name: 'Supplier 1',
  type: businessPartnerTypes.SUPPLIER
}, {
  id: 7,
  name: 'Supplier 2',
  type: businessPartnerTypes.SUPPLIER
}, {
  id: 8,
  name: 'Reebok',
  type: businessPartnerTypes.BRAND
}, {
  id: 9,
  name: 'Vans',
  type: businessPartnerTypes.BRAND
}, {
  id: 10,
  name: 'Ray-Ban',
  type: businessPartnerTypes.BRAND
}, {
  id: 11,
  name: 'Tommy Hilfiger',
  type: businessPartnerTypes.BRAND
}, {
  id: 12,
  name: 'Merchant 4',
  type: businessPartnerTypes.MERCHANT
}, {
  id: 13,
  name: 'Merchant 5',
  type: businessPartnerTypes.MERCHANT
}, {
  id: 14,
  name: 'Supplier 3',
  type: businessPartnerTypes.SUPPLIER
}, {
  id: 15,
  name: 'Supplier 4',
  type: businessPartnerTypes.SUPPLIER
}, {
  id: 16,
  name: 'Supplier 5',
  type: businessPartnerTypes.SUPPLIER
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
