import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Close } from '@material-ui/icons';
import { Button as MUIButton, TextField } from '@material-ui/core';
// import './style.css';
import * as S from './styles';
import { validateLogin } from 'utils/validator';

const LoginForm = ({ setIsRegistered, history }) => {
	const [loginUserData, setLoginUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [doneLoggingIn, setDoneLoggingIn] = useState(true);

	const loginHandler = e => {
		e.preventDefault();

		validateLogin(
			setIsValid,
			setError,
			loginUserData,
			setLoginUserData,
			history,
			setDoneLoggingIn
		);
	};

	return (
		<S.Container className='mt-5'>
			<Card className='login-card'>
				<Card.Body>
					<form onSubmit={loginHandler} className='form'>
						<h2 className='text-center title'>Login </h2>
						<div className='input-groups pb-3'>
							<TextField
								type='text'
								label='Email address'
								fullWidth
								id='standard-basic'
								className='pb-3'
								value={loginUserData.email}
								onChange={e =>
									setLoginUserData({
										...loginUserData,
										email: e.target.value,
									})
								}
							/>

							<TextField
								type='password'
								label='Password'
								fullWidth
								id='standard-basic'
								className='pb-3'
								value={loginUserData.password}
								onChange={e =>
									setLoginUserData({
										...loginUserData,
										password: e.target.value,
									})
								}
							/>

							<MUIButton className='forgot-password mb-3'>
								Forgot password?
							</MUIButton>
							<MUIButton
								variant='contained'
								color='primary'
								type='submit'
								className='w-100 mb-3'
							>
								{doneLoggingIn ? 'Login' : 'Logging in...'}
							</MUIButton>

							<MUIButton
								className='not-yet-registered mb-3'
								onClick={() => setIsRegistered(false)}
							>
								Not yet registered?
							</MUIButton>
						</div>
						{!isValid && (
							<div className='error-container w-100'>
								<span className='error'>{error}</span>
								<Close
									className='close-icon'
									onClick={() => setIsValid(true)}
								/>
							</div>
						)}
					</form>
				</Card.Body>
			</Card>
		</S.Container>
	);
};

export default LoginForm;
