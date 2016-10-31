import { combineReducers } from 'redux';
import visibility from './visibility';
import navigation from './navigation';
import businessPartners from './business-partners';

const scHeaderReducers = combineReducers({
  visibility,
  navigation,
  businessPartners
});

export default scHeaderReducers;
