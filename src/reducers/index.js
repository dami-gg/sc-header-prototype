import { combineReducers } from 'redux';
import visibility from './visibility';
import navigation from './navigation';

const scHeaderReducers = combineReducers({
  visibility,
  navigation
});

export default scHeaderReducers;
