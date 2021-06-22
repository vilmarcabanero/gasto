import { combineReducers } from 'redux';
import entries from './entries';
import categories from './categories'

export default combineReducers({
	entries,
	categories
});
