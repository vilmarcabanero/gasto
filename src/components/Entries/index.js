import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Entry from './Entry';
import useStyles from './styles';

const Entries = ({
	setCurrentId,
	open,
	setOpen,
	doneFetchingEntries,
	setDoneFetchingEntries,
}) => {
	const entries = useSelector(state => state.entries);
	const classes = useStyles();

	// console.log(entries);
	return !doneFetchingEntries ? (
		<CircularProgress />
	) : !entries.length ? (
		<div>No entries yet. Please add some entry.</div>
	) : (
		<Grid className={classes.container} container alignItems='stretch'>
			<Grid className={classes.entryContainer} xs={12}>
				<p className={classes.date}>Date</p>
				<p className={classes.time}>Time</p>
				<p className={classes.entryName}>Entry Name</p>
				<p className={classes.category}>Category</p>
				<p className={classes.amount}>Amount</p>
			</Grid>
			{entries.map(entry => (
				<Grid key={entry._id} xs={12}>
					<Entry
						doneFetchingEntries={doneFetchingEntries}
						setDoneFetchingEntries={setDoneFetchingEntries}
						entry={entry}
						setCurrentId={setCurrentId}
						open={open}
						setOpen={setOpen}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Entries;
