import React from 'react';
import ReactDOM from 'react-dom';
import Prototype from './components/prototype/Prototype';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prototype />, div);
});
