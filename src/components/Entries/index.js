import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Entry from './Entry';
import useStyles from './styles';

const Entries = ({ setCurrentId }) => {
	const entries = useSelector(state => state.entries);
	const classes = useStyles();

	console.log(entries);
	return !entries.length ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
			spacing={3}
		>
			{entries.map(entry => (
				<Grid key={entry._id} item xs={12} sm={6}>
					<Entry entry={entry} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Entries;
