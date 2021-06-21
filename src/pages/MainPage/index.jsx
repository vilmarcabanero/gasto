import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getEntries } from 'redux/actions/entries';
// import EntryForm from 'components/EntryForm';
import EntryForm from 'components/EntryForm/indexOld';

import Entries from 'components/Entries';
import useStyles from './styles';
const MainPage = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEntries());
	}, [currentId, dispatch]);

	return (
		<Container maxwidth='lg'>
			<AppBar className={classes.appBar} position='static' color='primary'>
				<Typography className={classes.heading} variant='h4'>
					Gasto
				</Typography>
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
		</Container>
	);
};

export default MainPage;
