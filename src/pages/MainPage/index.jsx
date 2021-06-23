import React, { useState, useEffect } from 'react';
import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	Button,
} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { getEntries } from 'redux/actions/entries';
import { getCategories } from 'redux/actions/categories';
// import EntryForm from 'components/EntryForm';
import EntryForm from 'components/Forms/EntryForm/index.jsx';
import UserContext from 'context/user';
import * as userAPI from 'api/user';

import Entries from 'components/Entries';
import useStyles from './styles';
import * as S from './styles';
import defaultCategories from 'data/defaultCategories.json';
import Profile from 'components/Profile/ProfilePopover';
import ExpenseIncomeSummary from 'components/EntriesSummary';
import SearchBar from 'components/SearchBar'

const MainPage = ({ history }) => {
	const [currentId, setCurrentId] = useState(null);
	const [open, setOpen] = useState(false);
	//Categories
	const [currentCategoryId, setCurrentCategoryId] = useState(null);
	const [categoryOpen, setCategoryOpen] = useState(false);

	const categories = useSelector(state => state.categories);

	const [categoryData, setCategoryData] = useState([
		...defaultCategories,
		...categories,
	]);


	const [doneFetchingEntries, setDoneFetchingEntries] = React.useState(false);
	console.log(doneFetchingEntries);

	// const categories = useSelector(state => state.categories);
	// const [categoryData, setCategoryData] = useState([
	// 	...defaultCategories,
	// 	...categories,
	// ]);

	const classes = useStyles();
	const dispatch = useDispatch();

	const { user, setUser } = React.useContext(UserContext);

	useEffect(() => {
		dispatch(getEntries(setDoneFetchingEntries));
		dispatch(getCategories());
		setCategoryData([...defaultCategories, ...categories]);
		console.log('Category data sa first render/log in.', categoryData)
		// console.log('Initial state ng category data pala to.',categoryData);
		console.log('Successfully re-rendered Main Page');
	}, [currentId, dispatch, open, categoryOpen]); //open, Heto solution sa not rerendering after adding entry, piliting i.rerender if mag open or close ang modal.
	//added categoryOpen, need pala buong main page ang i.rerender not just the EntryForm para mag reflect kagad ang changes ng pag add ng category.// setCategoryData([...defaultCategories, ...categories]); Sinama to dito

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
				<div className='profile-container'>
					<Profile user={user} logoutHandler={logoutHandler} />
				</div>
			</AppBar>

			<Grow in>
				<Container>
					<Grid
						className={classes.mainContainer}
						container
						justify='space-between'
						alignItems='stretch'
						spacing={2}
					>
						<Grid item xs={12} className={classes.entryFormContainer}>
							
							<SearchBar />
							<EntryForm
								currentId={currentId}
								setCurrentId={setCurrentId}
								currentCategoryId={currentCategoryId}
								setCurrentCategoryId={setCurrentCategoryId}
								open={open}
								setOpen={setOpen}
								categoryOpen={categoryOpen}
								setCategoryOpen={setCategoryOpen}
								setDoneFetchingEntries={setDoneFetchingEntries}
								// categories={categories}
								categoryData={categoryData}
								setCategoryData={setCategoryData}
							/>
						</Grid>
						<Grid item xs={12}>
							<ExpenseIncomeSummary />
						</Grid>

						<Grid item xs={12}>
							<Entries
								setCurrentId={setCurrentId}
								open={open}
								setOpen={setOpen}
								setDoneFetchingEntries={setDoneFetchingEntries}
								doneFetchingEntries={doneFetchingEntries}
								setCategoryData={setCategoryData}
							/>
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</S.StyledContainer>
	);
};

export default MainPage;
