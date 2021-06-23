import api from 'api';

export const getEntries = () => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.get(`/entries`, config);
};

export const createEntry = newEntry => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.post(`/entries`, newEntry, config);
};

export const updateEntry = (id, updatedEntry) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.put(`/entries/${id}`, updatedEntry, config);
};

export const deleteEntry = id => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.delete(`/entries/${id}`, config);
};

export const getExpenses = () => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.get(`/entries/expenses`, config);
};

export const getIncome = () => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.get(`/entries/income`, config);
};
