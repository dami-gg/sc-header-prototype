import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import scHeaderReducers from './reducers';

import Prototype from './components/prototype/prototype.component';
import './assets/styles/main.scss';

let store = createStore(scHeaderReducers);

ReactDOM.render(
    <Provider store={store}>
      <Prototype />
    </Provider>,
    document.getElementById('root')
);
