import React, { Component } from 'react';
import Header from '../header/header.component';
import Application from '../application/application.component';
import './prototype.scss';

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

class Prototype extends Component {
  render() {
    return (
      <div className="prototype">
        <Header products={products} />
        <Application />
      </div>
    );
  }
}

export default Prototype;
