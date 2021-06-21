import api from 'api';

export const getUserDetails = async setUser => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};

		const { data } = await api.get('/user', config);
		setUser(data);
	} catch (err) {
		console.log(err.response.data);
	}
};
