import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

export default makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		padding: 6,

		'&:hover': {
			iconButtons: {
				visibility: 'visible',
			},
		},
	},
	entryContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 10,
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
		maxWidth: '12rem',
		width: '100%',
		textAlign: 'left',
		paddingLeft: 10,
		marginTop: 14,
	},
	category: {
		maxWidth: '9rem',
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

	iconButtons: {
		maxWidth: '5rem',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight: '1rem',
		paddingLeft: 10,
		position: 'absolute',
		right: 20,
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

export const IconContainer = styled.div`
	visibility: hidden;
`;

export const EntryContainer = styled.div`
	&:hover,
	&:active {
		background-color: rgba(200, 200, 200, 0.2);
		${IconContainer} {
			visibility: visible;
		}
	}
`;
