import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Entry from './Entry';
import useStyles from './styles';

const Entries = ({ setCurrentId, open, setOpen }) => {
	const entries = useSelector(state => state.entries);
	const classes = useStyles();

	// console.log(entries);
	return !entries.length ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
		>
			{entries.map(entry => (
				<Grid key={entry._id} item xs={12} sm={12}>
					<Entry
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
