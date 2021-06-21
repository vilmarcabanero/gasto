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

const Entry = ({ entry, setCurrentId }) => {
	const classes = useStyles();
	console.log(entry);
	// const dispatch = useDispatch();
	return (
		<Card className={classes.card}>
			{/* <CardMedia
				className={classes.media}
				image={entry.selectedFile}
				title={entry.title}
			/>
			<div className={classes.overlay}>
				<Typography variant='h6'>{entry.creator}</Typography>
				<Typography variant='body2'>
					{moment(entry.createdAt).fromNow()}
				
				</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button
					style={{ color: 'white' }}
					size='small'
					onClick={() => setCurrentId(entry._id)}
				>
					<MoreHoriz fontSize='default' />
				</Button>
			</div>
			<Typography className={classes.title} variant='h5' gutterBottom>
				{entry.title}
			</Typography>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{entry.message}
				</Typography>
			</CardContent>

			<CardActions className={classes.cardActions}>
				<Button
					color='primary'
					size='small'
					onClick={() => dispatch(deleteEntry(entry._id))}
				>
					<Delete fontSize='small' />
					Delete
				</Button>
			</CardActions>
		 */}
			<h3>Entry</h3>
		</Card>
	);
};
// {1 day ago ? moment(entry.createdAt) : moment(entry.createdAt).format('LLLL')}
export default Entry;
