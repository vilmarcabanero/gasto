import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			padding: theme.spacing(2), //old
		},
	},
	paper: {
		padding: theme.spacing(2),
	},
	form: {
		// display: 'flex',
		// flexWrap: 'wrap',
		// justifyContent: 'center',
	},
	fileInput: {
		width: '97%',
		margin: '10px 0',
	},
	buttonSubmit: {
		marginBottom: 10,
	},
	//Dialog
	dialog: {
		maxWidth: '30rem',
		width: '100%',
		margin: 'auto',
	},
	dialogTitle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	incomeTitle: {
		color: '#3ab98d',
	},
	expenseTitle: {
		color: '#cb4545',
	},

	//modals

	modalContainer: {
	},

	//Buttons
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},

	cashButtons: {
		float: 'right',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '16.5rem',
		marginBottom: '1rem'
	},
	cashInButton: {
		color: '#fff',
		backgroundColor: '#3ab98d',
		maxWidth: '8rem',
		width: '100%',
		'&:hover': {
			backgroundColor: '#3ab98d',
		},
	},
	cashOutButton: {
		color: '#fff',
		backgroundColor: '#cb4545',
		maxWidth: '8rem',
		width: '100%',
		'&:hover': {
			backgroundColor: '#cb4545',
		},
	},

	//Datepicker
	datePickerContainerFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	datePicker: {
		width: '60%',
	},
	timePicker: {
		width: '38%',
	},

	//Select and photo
	category: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	formControl: {
		width: '75%',
	},
	addCategory: {
		width: '15%',
		marginTop: '8px',
	},
}));

export const SearchButtonContainer = styled.div`
	padding-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

// export const SearchBar = styled.input`
// 	border-radius: 5px;
// 	font-size: 1rem;
// 	width: 50%;
// 	color: ${props => props.theme.text};
// 	height: 2.5rem;
// 	padding-left: 0.5rem;
// 	background-color: transparent;
// 	transition: all 0.5s ease;
// 	outline: none;
// 	border: 1px solid ${props => props.theme.borderColor};

// 	@media (max-width: 576px) {
// 		width: 49%;
// 	}
// `;

export const DatePickerContainerFlex = styled.div`
	margin-top: 1.75rem;
	margin-bottom: 1.25rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DatePickerContainer = styled.div`
	position: relative;
	width: 100%;
	&:not(:last-child) {
		margin-right: 1%;
	}
`;

export const DatePickerPlaceholder = styled.span`
	position: absolute;
	top: -19px;
	left: 0px;
	font-size: 0.8rem;
	color: gray;
	font-weight: 500;
`;

export const StyledButton = styled(Button)`
	background-color: #6772e5;
	color: #fff;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 7px 14px;

	&:hover {
		background-color: #5469d4;
	}
`;

export const CashInButton = styled(Button)`
	background-color: #3ab98d;
	color: white;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	margin-left: -1em;
	&:hover {
		background-color: #3ab98d;
	}
`;

export const CashOutButton = styled(Button)`
	background-color: #cb4545;
	color: white;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	width: 100%;
	margin-right: -1rem;
	&:hover {
		background-color: #cb4545;
	}
`;

export const Form = styled.form``;

// export const Label = styled.label`
// 	position: relative;
// 	width: 100%;
// 	margin: 10px 0;
// 	padding-top: 1rem;
// 	transition: all 0.5s ease;
// 	display: inline-block; //heto solution.
// 	&:hover {
// 		cursor: text;
// 	}
// `;
