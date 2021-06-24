import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core'
import styled from 'styled-components'

export default makeStyles(theme => ({
	appBar: {
		borderRadius: 2,
		marginTop: '0',
		marginBottom: 30,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '3.25rem'
	},
	heading: {
		marginLeft: 20,
	},
	image: {
		marginLeft: '15px',
	},
	[theme.breakpoints.down('sm')]: {
		mainContainer: {
			// flexDirection: 'column-reverse',
		},
	},
	entryFormContainer: {
		marginBottom: '-2rem',
		// position: 'relative',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	entryFormContainerNoSearchbar: {
		marginBottom: '-25rem',
		// position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	[theme.breakpoints.down('sm')]: {
		entryFormContainer: {
			flexDirection: 'column',
		},
	},
	entriesContainerNoEntry: {
		marginTop: '13rem'
	}

}));

export const StyledContainer = styled(Container)`

	.profile-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

