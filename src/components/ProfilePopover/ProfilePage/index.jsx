import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import * as S from './styles'
import { withStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import * as MuiPickers from '@material-ui/pickers';
import { Close, PhotoCamera, Add, Remove, Edit } from '@material-ui/icons';
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
	Modal,
	Fade,
	Backdrop,
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
	setCategoryData,
	// profilePageOpen,
	// setProfilePageOpen,
}) => {
	const classes = useStyles();

	const { user } = React.useContext(UserContext);

	// const handleClose = () => {
	// 	console.log('Profile page is closed.');
	// };

	const [profilePageOpen, setProfilePageOpen] = React.useState(false);

	const handleOpen = () => {
		setProfilePageOpen(true);
	};

	const handleClose = () => {
		setProfilePageOpen(false);
	};

	// setTimeout(() => {
	// 	setProfilePageOpen(false);
	// 	console.log("Profile page is closed.")
	// }, 2000);

	// const showProfilePageHandler = () => {
	// 	setProfilePageOpen(true);
	// };

	return (
		<div className={classes.modalContainer}>
			<div className={classes.userDetails} onClick={handleOpen}>
				<Typography className={classes.picture} variant='subtitle1'>
					{[...user.firstName][0]}
				</Typography>
				<Typography className={classes.name} variant='subtitle1'>
					{`${user.firstName} ${user.lastName}`}
				</Typography>
			</div>
			{/* <Edit fontSize='small' className={classes.editProfileIcon} /> */}

			{/* <button type='button' onClick={handleOpen}>
				react-transition-group
			</button> */}
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={profilePageOpen}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={profilePageOpen}>
					<div className={classes.paper}>
						<Typography
							variant='h4'
							className={classes.profileTitle}
							id='transition-modal-title'
						>
							Profile
						</Typography>
						<hr />
						<div
							id='transition-modal-description'
							className={classes.modalBody}
						>
							<div className={classes.profilePictureBodyContainer}>
							<Typography
								className={classes.profilePictureBody}
								variant='subtitle1'
							>
								{[...user.firstName][0]}
							</Typography>
							</div>
							<p>{user.firstName}</p>
							<p>{user.lastName}</p>
							<p>{user.userName}</p>
							<p>{user.email}</p>
							<S.EntryContainer
			fullWidth
			className={classes.container}
			id='entry-container'
		>
			<p className={classes.category}>{category.name}</p>

			<S.IconContainer className={classes.iconButtons}>
				<IconButton onClick={updateCategoryHandler}>
					<Edit style={{ color: '#1976d2' }} />
				</IconButton>
				<IconButton onClick={deleteCategoryHandler}>
					<Delete id='delete-icon' style={{ color: '#e74c3c', zIndex: 9999 }} />
				</IconButton>
			</S.IconContainer>
		</S.EntryContainer>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default EntryForm;
