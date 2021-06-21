import api from 'api';

export const getEntries = () => api.get(`/entries`);

export const createEntry = newPost => api.post(`/entries`, newPost);

export const updateEntry = (id, updatedPost) =>
	api.patch(`/entries/${id}`, updatedPost);

export const deleteEntry = id => api.delete(`/entries/${id}`);
