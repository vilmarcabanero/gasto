import React, { useState, useEffect } from 'react';
import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getEntries } from 'redux/actions/entries';
// import EntryForm from 'components/EntryForm';
import EntryForm from 'components/EntryForm/index.jsx';
import UserContext from 'context/user';
import * as userAPI from 'api/user';

import Entries from 'components/Entries';
import useStyles from './styles';
import * as S from './styles';

const MainPage = ({ history }) => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	const { user, setUser } = React.useContext(UserContext);

	useEffect(() => {
		dispatch(getEntries());
	}, [currentId, dispatch]);

	useEffect(() => {
		userAPI.getUserDetails(setUser);
	}, []);

	const logoutHandler = () => {
		localStorage.removeItem('authToken');
		history.push('/');
	};

	return (
		<S.StyledContainer maxwidth='lg'>
			<AppBar className={classes.appBar} position='static' color='primary'>
				<Typography className={classes.heading} variant='h4'>
					Gasto
				</Typography>
				<div className='profile-name-container'>
					<Button onClick={logoutHandler} style={{color: '#fff'}}>
						Logout
					</Button>
					<Typography className={classes.profileName} variant='p'>
						{`${user.firstName} ${user.lastName}`}
					</Typography>
				</div>
			</AppBar>

			<Grow in>
				<Container>
					<Grid
						className={classes.mainContainer}
						container
						justify='space-between'
						alignItems='stretch'
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<EntryForm currentId={currentId} setCurrentId={setCurrentId} />
							<Entries setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</S.StyledContainer>
	);
};

export default MainPage;
