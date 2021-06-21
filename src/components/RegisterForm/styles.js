import { makeStyles } from '@material-ui/core/styles';

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
