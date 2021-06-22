import * as api from 'redux/api/categories.js';
import * as CONST from 'utils/constants/actionTypes';

export const getCategories = () => async dispatch => {
	try {
		const { data } = await api.getCategories();
		// setDoneFetchingCategories(true);
		dispatch({ type: CONST.GET_CATEGORIES, payload: data });
		// console.log(data);
		console.log('Successfully fetched categories from the server.', data);
	} catch (err) {
		console.log(err);
	}
};

export const createCategory = entry => async dispatch => {
	try {
		const { data } = await api.createCategory(entry);
		dispatch({ type: CONST.CREATE_CATEGORY, payload: data });
		console.log('Created a category success.', data);
	} catch (err) {
		console.log(err);
	}
};

export const updateCategory = (id, entry) => async dispatch => {
	try {
		const { data } = await api.updateCategory(id, entry);
		dispatch({ type: CONST.UPDATE_CATEGORY, payload: data });
		console.log('Successfully updated a category.');
	} catch (err) {
		console.log(err);
	}
};

export const deleteCategory = id => async dispatch => {
	try {
		await api.deleteCategory(id);
		dispatch({ type: CONST.DELETE_CATEGORY, payload: id });
		console.log('Successfully deleted a category.');
	} catch (err) {
		console.log(err);
	}
};
