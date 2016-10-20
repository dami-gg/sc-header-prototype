import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import scHeaderReducers from './reducers';

import Header from '../header/Header';
import Application from '../application/Application';
import './assets/styles/main.scss';

let store = createStore(scHeaderReducers);

var products = [
  {
    id: 1,
    name: 'Content',
    applications: [{
      id: 1,
      name: 'CMS',
      url: '/cms'
    }, {
      id: 2,
      name: 'Analytics',
      url: '/analytics'
    }]
  },
  {
    id: 2,
    name: 'Insights',
    applications: [{
      id: 3,
      name: 'Coplanner',
      url: '/coplanner'
    }]
  },
  {
    id: 3,
    name: 'Merchant center',
    applications: [{
      id: 4,
      name: 'Articles',
      url: '/articles'
    }, {
      id: 5,
      name: 'Orders',
      url: '/orders'
    }]
  }
];

ReactDOM.render(
    <Provider store={store}>
      <div>
        <Header products={products} />
        <Application />
      </div>
    </Provider>,
    document.getElementById('root')
);
