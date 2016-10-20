import { combineReducers } from 'redux';
import visibility from './Visibility';
import navigation from './Navigation';

const scHeaderReducers = combineReducers({
  visibility,
  navigation
});

export default scHeaderReducers;
