import * as api from 'redux/api/entries.js';
import * as CONST from 'utils/constants/actionTypes';
import API from 'api';

export const getEntries = setDoneFetchingEntries => async dispatch => {
	try {
		const { data } = await api.getEntries();
		setDoneFetchingEntries(true);
		dispatch({ type: CONST.GET_ENTRIES, payload: data });
		// console.log(data);
		console.log('Successfully fetched entries from the server.');
	} catch (err) {
		console.log(err);
	}
};

export const createEntry = entry => async dispatch => {
	try {
		const { data } = await api.createEntry(entry);
		dispatch({ type: CONST.CREATE_ENTRY, payload: data });
		console.log('Created an entry success.', data);
	} catch (err) {
		console.log(err);
	}
};

export const updateEntry = (id, entry) => async dispatch => {
	try {
		const { data } = await api.updateEntry(id, entry);
		dispatch({ type: CONST.UPDATE_ENTRY, payload: data });
		console.log('Successfully updated an entry.');
	} catch (err) {
		console.log(err);
	}
};

export const deleteEntry = id => async dispatch => {
	try {
		await api.deleteEntry(id);
		dispatch({ type: CONST.DELETE_ENTRY, payload: id });
		console.log('Successfully deleted an entry.');
	} catch (err) {
		console.log(err);
	}
};
