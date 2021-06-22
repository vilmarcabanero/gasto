import api from 'api';

export const getCategories = () => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.get(`/categories`, config);
};

export const createCategory = newEntry => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.post(`/entries`, newEntry, config);
};

export const updateCategory = (id, updatedEntry) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.put(`/entries/${id}`, updatedEntry, config);
};

export const deleteCategory = id => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.delete(`/entries/${id}`, config);
};
