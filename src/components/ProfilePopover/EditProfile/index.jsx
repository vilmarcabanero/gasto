import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import * as MuiPickers from '@material-ui/pickers';
import { Close, PhotoCamera, Add, Remove } from '@material-ui/icons';
import moment from 'moment';
import {
	TextField,
	Button,
	Typography,
	Paper,
	DialogTitle,
	IconButton,
	DialogContent,
	Dialog,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEntry, getEntries, updateEntry } from 'redux/actions/entries';
import { getCategories } from 'redux/actions/categories';
import { Card } from 'react-bootstrap';
import CategoryForm from 'components/Forms/CategoryForm';
import Categories from 'components/Categories';
import defaultCategories from 'data/defaultCategories.json';
import UserContext from 'context/user';

//Modal
const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(3),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

const MuiDialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props;
	return (
		<DialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h5'>{children}</Typography>
			{onClose ? (
				<IconButton aria-label='close' onClick={onClose}>
					<Close />
				</IconButton>
			) : null}
		</DialogTitle>
	);
});

const MuiDialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(3),
	},
}))(DialogContent);

const EntryForm = ({
	// currentId,
	// setCurrentId,
	// currentCategoryId,
	// setCurrentCategoryId,
	// open,
	// setOpen,
	// categoryOpen,
	// setCategoryOpen,
	// setDoneFetchingEntries,
	// categoryData,
	// setCategoryData,
	editProfileOpen,
	setEditProfileOpen,
}) => {
	const classes = useStyles();
	const [userInputData, setUserInputData] = useState({
		firstName: '',
		lastName: '',
	});

	const { user } = React.useContext(UserContext);

	const submitHandler = e => {
		e.preventDefault();
		console.log('Previous datails: ', user.firstName, user.lastName);
		console.log(
			'Updated datails: ',
			userInputData.firstName,
			userInputData.lastName
		);
	};

	const handleClose = () => {
		setEditProfileOpen(false);
	};

	return (
		<div className={classes.modalContainer}>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={editProfileOpen}
				// maxWidth='xs'
				className={classes.dialog}
			>
				<MuiDialogTitle id='customized-dialog-title' onClose={handleClose}>
					<div className={classes.editProfileTitle}>Edit profile</div>
				</MuiDialogTitle>

				<MuiDialogContent dividers>
					<form className={classes.form} onSubmit={submitHandler}>
						<TextField
							label='First name'
							type='text'
							fullWidth
							className='mb-3 mt-3'
							size='small'
							value={userInputData.firstName}
							onChange={e =>
								setUserInputData({
									...userInputData,
									firstName: e.target.value,
								})
							}
						/>

						<TextField
							label='Enter entry name'
							type='text'
							fullWidth
							className='mb-3'
							size='small'
							value={userInputData.lastName}
							onChange={e =>
								setUserInputData({
									...userInputData,
									lastName: e.target.value,
								})
							}
						/>

						<Button
							variant='contained'
							className='mb-2'
							fullWidth
							color='primary'
							type='submit'
							// onClick={submitHandler}
						>
							Save
						</Button>
					</form>
				</MuiDialogContent>
			</Dialog>
		</div>
	);
};

export default EntryForm;
