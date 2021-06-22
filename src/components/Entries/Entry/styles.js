import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
	entryContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	date: {
		maxWidth: '7rem',
		width: '100%',
		textAlign: 'left',
	},
	time: {
		maxWidth: '5rem',
		width: '100%',
		textAlign: 'left',
	},

	entryName: {
		maxWidth: '5rem',
		width: '100%',
		textAlign: 'left',
	},

	iconButtons: {
		maxWidth: '5rem',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight: '1rem',
	},

	income: {
		color: '#3ab98d',
		fontWeight: 500,
	},
	expense: {
		color: '#cb4545',
		fontWeight: 500,
	},
});
