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
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	fileInput: {
		width: '97%',
		margin: '10px 0',
	},
	buttonSubmit: {
		marginBottom: 10,
	},
	//Old
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
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

export const Label = styled.label`
	position: relative;
	width: 100%;
	margin: 10px 0;
	padding-top: 1rem;
	transition: all 0.5s ease;
	display: inline-block; //heto solution.
	&:hover {
		cursor: text;
	}
`;

export const Placeholder = styled.span`
	font-size: 1rem;
	position: absolute;
	left: 0.7rem;
	top: 24px;
	color: rgba(0, 0, 0, 0.5);
	transition: all 0.5s ease;
	transition: all 0.3s ease, font-size 0.3s ease, color 0.3s ease;
	cursor: text;
	font-weight: 400;

	top: -3px;
	left: 0rem;
	font-size: 0.8rem;
	color: gray;
	font-weight: 500;
`;

export const Input = styled.input`
	border-radius: 5px;
	font-size: 1rem;
	width: 100%;
	color: black;
	border-bottom: 1px solid gainsboro;
	height: 2.5rem;
	padding-left: 0.5rem;
	background-color: transparent;
	transition: all 0.5s ease;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.2);
	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}

	&:valid + ${Placeholder}, &:focus + ${Placeholder} {
		top: -3px;
		left: 0rem;
		font-size: 0.8rem;
		color: gray;
		font-weight: 500;
	}
`;
