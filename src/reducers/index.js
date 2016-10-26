import { combineReducers } from 'redux';
import visibility from './Visibility';
import navigation from './Navigation';
import businessPartnerSearch from './BusinessPartnerSearch';

const scHeaderReducers = combineReducers({
  visibility,
  navigation,
  businessPartnerSearch
});

export default scHeaderReducers;
