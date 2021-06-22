import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	mainContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	smMargin: {
		margin: theme.spacing(1),
	},
	actionDiv: {
		textAlign: 'center',
	},
	//Entry
	entryContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		padding: 6,
		backgroundColor: 'rgba(200, 200, 200, 0.2)',
	},

	date: {
		maxWidth: '10rem',
		width: '100%',
		textAlign: 'left',
		paddingLeft: 10,
		marginTop: 14,
	},
	time: {
		maxWidth: '6rem',
		width: '100%',
		textAlign: 'left',
		paddingLeft: 10,
		marginTop: 14,
	},

	entryName: {
		maxWidth: '16rem',
		width: '100%',
		textAlign: 'left',
		paddingLeft: 10,
		marginTop: 14,
	},
	category: {
		maxWidth: '10rem',
		width: '100%',
		textAlign: 'left',
		paddingLeft: 20,
		marginTop: 14,
	},

	amount: {
		maxWidth: '4rem',
		width: '100%',
		textAlign: 'left',
		paddingLeft: 10,
		marginTop: 14,
	},
}));
