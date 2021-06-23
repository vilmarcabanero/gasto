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
import * as S from './styles';

const Entry = ({ entry, setCurrentId, open, setOpen }) => {
	const classes = useStyles();
	// console.log(entry);
	const dispatch = useDispatch();

	// const [hovered, setHovered] = React.useState(false);
	// const toggleHover = () => setHovered(!hovered);

	const today = new Date();

	const updateEntryHandler = () => {
		setCurrentId(entry._id);
		setOpen(true);
	};

	const deleteEntryHandler = () => {
		Swal.fire({
			title: 'Are you sure?',
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
		<S.EntryContainer
			fullWidth
			className={classes.container}
			id='entry-container'
		>
			{moment(today).format('LL') === moment(entry.updatedAt).format('LL') ? (
				<p className={classes.date}>Today</p>
			) : (
				<p className={classes.date}>{moment(entry.updatedAt).format('LL')}</p>
			)}
			<p className={classes.time}>{moment(entry.updatedAt).format('LT')}</p>
			<p className={classes.entryName}>{entry.name}</p>
			<p className={classes.category}>{entry.category}</p>
			<div className={classes.amount}>
				<p
					className={entry.type === 'income' ? classes.income : classes.expense}
				>
					{entry.amount}
				</p>
				{/* <p>{entry.balance}</p> */}
			</div>

			<S.IconContainer className={classes.iconButtons}>
				<IconButton onClick={updateEntryHandler}>
					<Edit style={{ color: '#1976d2' }} />
				</IconButton>
				<IconButton onClick={deleteEntryHandler}>
					<Delete id='delete-icon' style={{ color: '#e74c3c', zIndex: 9999 }} />
				</IconButton>
			</S.IconContainer>
		</S.EntryContainer>
	);
};

export default Entry;
