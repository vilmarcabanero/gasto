import React, { useState } from 'react';
import {
	Grid,
	CircularProgress,
	Tabs,
	Tab,
	Box,
	Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Entry from './Entry';
import useStyles from './styles';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `wrapped-tab-${index}`,
		'aria-controls': `wrapped-tabpanel-${index}`,
	};
}

const Entries = ({
	setCurrentId,
	open,
	setOpen,
	doneFetchingEntries,
	setDoneFetchingEntries,
}) => {
	const entries = useSelector(state => state.entries);
	const classes = useStyles();

	const [value, setValue] = React.useState('all');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	//Para ishow ang incomeEntries lang or ang expense entries lang.
	const incomeEntries = entries.filter(entry => entry.type === 'income');
	console.log('Income entries', incomeEntries);
	const expenseEntries = entries.filter(entry => entry.type === 'expense');
	console.log('Expense entries', expenseEntries);

	// console.log(entries);
	return !doneFetchingEntries ? (
		<CircularProgress />
	) : !entries.length ? (
		<div>No entries yet. Please add some entry.</div>
	) : (
		
		<Grid className={classes.container} container alignItems='stretch'>
			<Grid item xs={12} ><Tabs
		value={value}
		onChange={handleChange}
		aria-label='wrapped label tabs example'
	>
		<Tab value='all' label='Income' wrapped {...a11yProps('all')} />
		<Tab value='income' label='Expense' {...a11yProps('income')} />
		<Tab value='expense' label='All' {...a11yProps('expense')} />
	</Tabs>
</Grid>
			<Grid item className={classes.entryContainer} xs={12}>
				<p className={classes.date}>Date</p>
				<p className={classes.time}>Time</p>
				<p className={classes.entryName}>Entry Name</p>
				<p className={classes.category}>Category</p>
				<p className={classes.amount}>Amount</p>
			</Grid>
			{/* {entries.map(entry => (
				<Grid item key={entry._id} xs={12}>
					<Entry
						doneFetchingEntries={doneFetchingEntries}
						setDoneFetchingEntries={setDoneFetchingEntries}
						entry={entry}
						setCurrentId={setCurrentId}
						open={open}
						setOpen={setOpen}
					/>
				</Grid>
			))} */}

			<div className={classes.tabsRoot}>
			
			<TabPanel value={value} index='all'>
				{entries.map(entry => (
					<Grid item key={entry._id} xs={12}>
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
			</TabPanel>

			<TabPanel value={value} index='income'>
				{incomeEntries.map(entry => (
					<div>
						<p>{entry.name}</p>
						<p>{entry.amount}</p>
					</div>
				))}
			</TabPanel>
			<TabPanel value={value} index='expense'>
				{expenseEntries.map(entry => (
					<div>
						<p>{entry.name}</p>
						<p>{entry.amount}</p>
					</div>
				))}
			</TabPanel>

			</div>

			
		</Grid>
	);
};

export default Entries;
