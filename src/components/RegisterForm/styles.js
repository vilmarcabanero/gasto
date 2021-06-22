import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '35ch',
		},
	},
	button: {
		margin: theme.spacing(1),
		width: '48ch',
	},
	card: {
		width: '40ch',
		padding: '1rem',
		paddingBottom: '3rem',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '4rem',
		marginBottom: '2rem',
		position: 'relative',
	},
	error: {
		color: '#ff0033',
		position: 'absolute',
		bottom: '0',
	},
	errorContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export default useStyles;

export const Container = styled.div`
	.register-card {
		height: 37rem;
		max-width: 24rem;
		width: 100%;
		margin: auto;
		margin-top: 5rem;
	}

	.form {
		position: relative;
	}

	.error-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: -5.5rem;
		color: #d8000c;
		font-size: 18px;
		background-color: #ffbaba;
		border-radius: 3px;
		border: 1px solid rgba(216, 0, 12, 0.7);
	}

	.error {
		margin: 0.1rem;
		text-align: center;
		width: 80%;
	}

	.input-groups {
		margin-top: 1.5rem;
		position: relative;
	}

	.title {
		margin-top: 1.5rem;
	}

	.close-icon {
		position: absolute;
		right: 0.2rem;
		cursor: pointer;
		border-radius: 3px;
	}

	.close-icon:hover {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.already-registered {
		float: right;
	}
`;
