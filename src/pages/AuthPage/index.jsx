import React, { useState } from 'react';
import LoginForm from 'components/Auth/LoginForm';
import RegisterForm from 'components/Auth/RegisterForm';
import { Box, Grid } from '@material-ui/core';

const AuthPage = ({ history }) => {
	const [isRegistered, setIsRegistered] = useState(true);
	const [willRedirect, setWillRedirect] = useState(false);

	return (
		<Box > {/* height='100vh'*/}
			<Grid
				container
				justify='center'
				alignItems='center'
				// style={{ height: '100%' }}
			>
				{isRegistered ? (
					<LoginForm
						history={history}
						willRedirect={willRedirect}
						setWillRedirect={setWillRedirect}
						setIsRegistered={setIsRegistered}
					/>
				) : (
					<RegisterForm
						history={history}
						willRedirect={willRedirect}
						setWillRedirect={setWillRedirect}
						setIsRegistered={setIsRegistered}
					/>
				)}
			</Grid>
		</Box>
	);
};

export default AuthPage;
