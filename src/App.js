import React, { useState } from 'react';
import { UserProvider } from 'context/user';
import { ThemeContextProvider } from 'context/theme';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import AuthPage from 'pages/AuthPage';
import PrivateRoute from 'utils/routing/PrivateRoute';

import { CssBaseline } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});

	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('darkMode') || false
	);
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#3f51b5',
				contrastText: '#fff',
			},
			type: darkMode ? 'dark' : 'light',
		},
	});

	const userProviderValues = {
		user,
		setUser,
	};

	const themeContextProviderValues = {
		setDarkMode,
		darkMode,
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ThemeContextProvider value={themeContextProviderValues}>
				<UserProvider value={userProviderValues}>
					<Switch>
						<PrivateRoute exact path='/' component={MainPage} />
						{localStorage.getItem('authToken') ? (
							<Redirect to='/' />
						) : (
							<Route exact path='/auth' component={AuthPage} />
						)}
					</Switch>
				</UserProvider>
			</ThemeContextProvider>
		</ThemeProvider>
	);
};

export default App;
