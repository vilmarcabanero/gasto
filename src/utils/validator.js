import validator from 'validator';
import * as api from 'api/auth';

export const validateRegister = (
	setIsValid,
	setError,
	registerUserData,
	setRegisterUserData,
	history
) => {
	setTimeout(() => {
		setIsValid(true);
	}, 4000);

	if (validator.isEmpty(registerUserData.firstName)) {
		setIsValid(false);
		setError('First name is required.');
	} else if (validator.isEmpty(registerUserData.lastName)) {
		setIsValid(false);
		setError('Last name is required.');
	} else if (validator.isEmpty(registerUserData.email)) {
		setIsValid(false);
		setError('Please provide an email.');
	} else if (!validator.isEmail(registerUserData.email)) {
		setIsValid(false);
		setError('Valid email is required.');
	} else if (validator.isEmpty(registerUserData.password)) {
		setIsValid(false);
		setError('Password is required.');
	} else if (!validator.isLength(registerUserData.password, { min: 8 })) {
		setIsValid(false);
		setError('Password must be at least 8 characters long.');
	} else if (
		!validator.equals(
			registerUserData.password,
			registerUserData.confirmPassword
		)
	) {
		setIsValid(false);
		setError('Passwords do not match.');
	} else {
		api.register(
			setIsValid,
			setError,
			registerUserData,
			setRegisterUserData,
			history
		);
	}
};

export const validateLogin = (
	setIsValid,
	setError,
	loginUserData,
	setLoginUserData,
	setUser,
	history,
	setDoneLoggingIn
) => {
	setTimeout(() => {
		setIsValid(true);
	}, 4000);

	if (!validator.isEmail(loginUserData.email)) {
		setIsValid(false);
		setError('Valid email is required.');
	} else if (validator.isEmpty(loginUserData.password)) {
		setIsValid(false);
		setError('Password is required.');
	} else if (!validator.isLength(loginUserData.password, { min: 8 })) {
		setIsValid(false);
		setError('Password must be at least 8 characters long.');
	} else {
		api.login(
			setIsValid,
			setError,
			loginUserData,
			setLoginUserData,
			setUser,
			history,
			setDoneLoggingIn
		);
	}
};
