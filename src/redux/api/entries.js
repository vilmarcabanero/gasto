import api from 'api';

export const getEntries = () => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.get(`/entries`, config);
};

export const createEntry = newPost => api.post(`/entries`, newPost);

export const updateEntry = (id, updatedPost) =>
	api.patch(`/entries/${id}`, updatedPost);

export const deleteEntry = id => api.delete(`/entries/${id}`);
