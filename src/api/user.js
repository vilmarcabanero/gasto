import api from 'api';

export const getUserDetails = async setUser => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};

		const { data } = await api.get('/users', config);
		// console.log(data);
		setUser(data);
	} catch (err) {
		console.log(err.response.data);
	}
};
