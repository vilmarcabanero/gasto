import React from 'react';
import useStyles from './styles';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	IconButton,
} from '@material-ui/core';
import { Delete, MoreHoriz, Edit } from '@material-ui/icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteEntry } from 'redux/actions/entries';
import * as format from 'utils/date';
import Swal from 'sweetalert2';

const Entry = ({ entry, setCurrentId, open, setOpen }) => {
	const classes = useStyles();
	// console.log(entry);
	const dispatch = useDispatch();

	const today = new Date();

	const updateEntryHandler = () => {
		setCurrentId(entry._id);
		setOpen(true);
	};

	const deleteEntryHandler = () => {
		Swal.fire({
			title: 'Delete Entry',
			text: 'Once deleted, this entry can not be restored.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'I understand, delete it.',
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire('Deleted!', 'The entry has been deleted.', 'success');
				dispatch(deleteEntry(entry._id));
			}
		});
		
	};

	return (
		<div className={classes.entryContainer}>
			<p>{entry.name}</p>
			<p>{entry.category}</p>
			<p className={entry.type === 'income' ? classes.income : classes.expense}>
				{entry.amount}
			</p>
			{moment(today).format('LL') === moment(entry.updatedAt).format('LL') ? (
				'Today'
			) : (
				<p> {moment(entry.updatedAt).format('LL')}</p>
			)}
			<p>{moment(entry.updatedAt).format('LT')}</p>
			<IconButton onClick={updateEntryHandler}>
				<Edit style={{ color: '#1976d2' }} />
			</IconButton>
			<IconButton onClick={deleteEntryHandler}>
				<Delete style={{ color: '#e74c3c' }} />
			</IconButton>
		</div>
	);
};

export default Entry;
