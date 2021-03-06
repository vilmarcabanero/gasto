import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
import { Close } from '@material-ui/icons';
import { Button, TextField, CircularProgress, Card,Typography } from '@material-ui/core';

// import './style.css';
import * as S from './styles';
import { validateRegister } from 'utils/validator';

const RegisterForm = ({ setIsRegistered, history }) => {
	const [registerUserData, setRegisterUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [doneRegistering, setDoneRegistering] = useState(true);

	// console.log(isValid);

	const registerHandler = e => {
		e.preventDefault();
		// console.log(registerUserData);
		validateRegister(
			setIsValid,
			setError,
			registerUserData,
			setRegisterUserData,
			history,
			setDoneRegistering
		);
	};

	return (
		<S.Container>
			<Card className='register-card p-4'>
				<div>
					<form onSubmit={registerHandler} className='form'>
						<h2 className='text-center title'>Register </h2>
						<div className='input-groups pb-3 mt-3'>
							<TextField
								label='First Name'
								fullWidth
								className='pb-3'
								value={registerUserData.firstName}
								onChange={e =>
									setRegisterUserData({
										...registerUserData,
										firstName: e.target.value,
									})
								}
							/>

							<TextField
								label='Last Name'
								fullWidth
								className='pb-3'
								value={registerUserData.lastName}
								onChange={e =>
									setRegisterUserData({
										...registerUserData,
										lastName: e.target.value,
									})
								}
							/>

							<TextField
								type='text'
								label='Email address'
								fullWidth
								className='pb-3'
								value={registerUserData.email}
								onChange={e =>
									setRegisterUserData({
										...registerUserData,
										email: e.target.value,
									})
								}
							/>

							<TextField
								type='password'
								label='Password'
								fullWidth
								className='pb-3'
								value={registerUserData.password}
								onChange={e =>
									setRegisterUserData({
										...registerUserData,
										password: e.target.value,
									})
								}
							/>

							<TextField
								type='password'
								label='Confirm Password'
								fullWidth
								className='pb-3'
								value={registerUserData.confirmPassword}
								onChange={e =>
									setRegisterUserData({
										...registerUserData,
										confirmPassword: e.target.value,
									})
								}
							/>

							<Button
								type='submit'
								variant='contained'
								color='primary'
								className='w-100 mt-3'
							>
								{doneRegistering ? (
									'Register'
								) : (
									<CircularProgress size={24} style={{ color: '#fff' }} />
								)}
							</Button>
							<Button
								className='already-registered mt-3'
								onClick={() => setIsRegistered(true)}
							>
								Already have an account?
							</Button>
						</div>
						{!isValid && (
							<div className='error-container w-100'>
								<Typography variant='body1' className='error'>{error}</Typography>
								<Close
									className='close-icon'
									onClick={() => setIsValid(true)}
								/>
							</div>
						)}
					</form>
				</div>
			</Card>
		</S.Container>
	);
};

export default RegisterForm;
