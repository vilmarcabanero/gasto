import React from 'react';
import useStyles from './styles';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import { Delete, MoreHoriz } from '@material-ui/icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteEntry } from 'redux/actions/entries';
import * as format from 'utils/date';

const Entry = ({ entry, setCurrentId }) => {
	const classes = useStyles();
	console.log(entry);
	// const dispatch = useDispatch();

	return (
		<div className={classes.entryContainer}>
			<h3>Entry</h3>
			<p>{entry.name}</p>
			<p>{entry.category}</p>
			<p className={entry.type === 'income' ? classes.income : classes.expense}>
				{entry.amount}
			</p>
			<p> {moment(entry.updatedAt).format('LL')}</p>

			{/* <p>Added {format.date(Date(entry.updatedAt), dateNow, day, month, year)}</p> */}
		</div>
	);
};
// {1 day ago ? moment(entry.createdAt) : moment(entry.createdAt).format('LLLL')}
export default Entry;
