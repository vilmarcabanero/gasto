import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

export default makeStyles(theme => ({
	popoverContent: {
		// maxWidth: '10rem',
		// width: '100%',

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 6,
		paddingBottom: 7,
	},
	userDetails: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		width: '100%',
		paddingLeft: 0,
		marginTop: 0,
		cursor: 'pointer',
		paddingBottom: 3,
		paddingTop: 3,
		borderRadius: 5,
	},
	editProfileIcon: {
		position: 'absolute',
		right: 4,
		visibility: 'hidden',
	},
	profileName: {
		color: '#fff',
		marginRight: 5,
	},
	name: {
		textAlign: 'left',
	},
	profilePicture: {
		color: '#fff',
		marginRight: 5,
		backgroundColor: 'rgba(200, 200, 200, 0.2)',
		borderRadius: '50%',
		border: '1px solid rgba(200, 200, 200, 0.5)',
		width: '1.75rem',
		height: '1.7rem',
	},
	picture: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'rgba(63,81,181, 0.3)',
		borderRadius: '50%',
		// border: '1px solid rgba(63,81,181, 0.75)',
		borderBottomStyle: 'solid',
		borderBottomWidth: '3px',
		width: '1.45rem',
		height: '1.4rem',
		marginRight: 5,
		paddingTop: 3,
		marginLeft: 3,
	},

	//For modal styling.
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		borderRadius: 5,
		maxWidth: '25rem',
		height: '20rem',

		margin: 'auto',
		width: '100%',
		boxShadow: theme.shadows[5],
		// padding: theme.spacing(2, 4, 3),
	},
	profileTitleContainer: {
		padding: theme.spacing(2),
		paddingBottom: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	profileTitle: {
		
	},
	modalBody: {
		padding: theme.spacing(2),
		paddingTop: 5,
		paddingBottom: theme.spacing(1),
	},
	profilePictureBody: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'rgba(63,81,181, 0.3)',
		borderRadius: '50%',
		// border: '1px solid rgba(63,81,181, 0.75)',
		borderBottomStyle: 'solid',
		borderBottomWidth: '3px',
		width: '7rem',
		height: '6.5rem',
		fontSize: '4.5rem',
		margin: 'auto',
		paddingTop: 3,
		marginLeft: 3,
	},
	profilePictureBodyContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	detailsContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		padding: 6,
		height: '3rem',
	},
	label: {
		width: '6rem',
		fontWeight: 'bold'
	},
	firstName: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	lastName: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	email: {
		// height: '3rem',
		// paddingTop: '0.5rem'
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	closeIconButton: {
		position: 'absolute',
		right: 12,
	},
}));

export const IconContainer = styled.div`
	visibility: hidden;
	position: absolute;
	right: 5px;
`;

export const DetailsContainer = styled.div`
	border-radius: 5px;
	&:hover,
	&:active {
		background-color: rgba(200, 200, 200, 0.2);
		${IconContainer} {
			visibility: visible;
		}
	}
`;

export const EmailContainer = styled.div`
	margin-top: 0rem;
	border-radius: 5px;
	&:hover,
	&:active {
		background-color: rgba(200, 200, 200, 0.2);
		${IconContainer} {
			visibility: visible;
		}
	}
`;
