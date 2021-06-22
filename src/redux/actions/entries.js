import * as api from 'redux/api/entries.js';
import * as CONST from 'utils/constants/actionTypes';
import API from 'api';

export const getEntries = () => async dispatch => {
	try {
		const { data } = await api.getEntries();
		dispatch({ type: CONST.GET_ENTRIES, payload: data });
		// console.log(data);

	} catch (err) {
		console.log(err);
	}
};

export const createEntry = entry => async dispatch => {
	try {
		const { data } = await api.createEntry(entry);
		dispatch({ type: CONST.CREATE_ENTRY, payload: data });
		console.log('Created an entry success.',data);
	} catch (err) {
		console.log(err);
	}
};

export const updateEntry = (id, entry) => async dispatch => {
	try {
		console.log(id);
		const { data } = await api.updateEntry(id, entry);
		dispatch({ type: CONST.UPDATE_ENTRY, payload: data });
	} catch (err) {
		console.log(err);
	}
};

export const deleteEntry = id => async dispatch => {
	try {
		await api.deleteEntry(id);
		dispatch({ type: CONST.DELETE_ENTRY, payload: id });
	} catch (err) {
		console.log(err);
	}
};
