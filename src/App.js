import React, { useState } from 'react';
import { UserProvider } from 'context/user';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import AuthPage from 'pages/AuthPage';
import PrivateRoute from 'utils/routing/PrivateRoute';

const App = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});

	const userProviderValues = {
		user,
		setUser,
	};

	return (
		<UserProvider value={userProviderValues}>
			<Switch>
				<PrivateRoute exact path='/' component={MainPage} />
				<Route exact path='/auth' component={AuthPage} />
			</Switch>
		</UserProvider>
	);
};

export default App;
