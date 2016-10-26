import { combineReducers } from 'redux';
import visibility from './Visibility';
import navigation from './Navigation';
import businessPartners from './BusinessPartners';

const scHeaderReducers = combineReducers({
  visibility,
  navigation,
  businessPartners
});

export default scHeaderReducers;
