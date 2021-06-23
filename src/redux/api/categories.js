import api from 'api';

export const getCategories = () => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.get(`/categories`, config);
};

export const createCategory = categoryInputData => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.post(`/categories`, categoryInputData, config);
};

export const updateCategory = (id, updatedCategory) => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.put(`/categories/${id}`, updatedCategory, config);
};

export const deleteCategory = id => {
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('authToken')}`,
		},
	};

	return api.delete(`/categories/${id}`, config);
};
