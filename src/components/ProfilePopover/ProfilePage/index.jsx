import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import * as S from './styles';
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
import * as userAPI from 'api/user';

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
	const { user, setUser } = React.useContext(UserContext);

	const [userInputData, setUserInputData] = useState({
		firstName: '',
		lastName: '',
	});

	const [profilePageOpen, setProfilePageOpen] = React.useState(false);
	const [editProfileOpen, setEditProfileOpen] = React.useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentId, setCurrentId] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		setIsEditing(false);
		setEditProfileOpen(false);
		userAPI.updatedUserDetails(setUser, userInputData);
		userAPI.getUserDetails(setUser);

		console.log('Previous datails: ', user.firstName, user.lastName);
		console.log(
			'Updated datails: ',
			userInputData.firstName,
			userInputData.lastName
		);
	};

	// const handleClose = () => {
	// 	console.log('Profile page is closed.');
	// };

	const handleOpen = () => {
		setProfilePageOpen(true);
	};

	const handleClose = () => {
		setProfilePageOpen(false);
	};

	const handleEditProfileClose = () => {
		setEditProfileOpen(false);
	};

	// setTimeout(() => {
	// 	setProfilePageOpen(false);
	// 	console.log("Profile page is closed.")
	// }, 2000);

	// const showProfilePageHandler = () => {
	// 	setProfilePageOpen(true);
	// };

	const updateProfileHandler = e => {
		console.log(e.currentTarget.id, ' is clicked.');
		setCurrentId(e.currentTarget.id);
		setEditProfileOpen(true);
		setIsEditing(true);
		if (e.currentTarget.id === 'firstname') {
			setUserInputData({ ...userInputData, firstName: user.firstName });
		} else {
			setUserInputData({ ...userInputData, lastName: user.lastName });
		}
		// console.log('Profile successfully updated.');
	};

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
						<div className={classes.profileTitleContainer}>
							<Typography
								variant='h4'
								className={classes.profileTitle}
								id='transition-modal-title'
							>
								Your details
							</Typography>
							<IconButton className={classes.closeIconButton}><Close onClick={handleClose} /></IconButton>
						</div>
						<hr />
						<div
							id='transition-modal-description'
							className={classes.modalBody}
						>
							{/* <div className={classes.profilePictureBodyContainer}>
								<Typography
									className={classes.profilePictureBody}
									variant='subtitle1'
								>
									{[...user.firstName][0]}
								</Typography>
							</div> */}
							{/* <p>{user.userName}</p>
							<p>{user.email}</p> */}
							<S.EmailContainer
								fullWidth
								className={classes.detailsContainer}
								id='first-container'
							>
								<div  className={classes.email}>
										<Typography variant='subtitle1' className={classes.label}> Email: </Typography>
											<Typography variant='subtitle1' > {` ${user.email}`}</Typography>
									</div>
							</S.EmailContainer>
							<div style={{ height: '3rem' }}>
								<S.DetailsContainer
									fullWidth
									className={classes.detailsContainer}
									id='first-container'
								>
									<div  className={classes.firstName}>
										<Typography variant='subtitle1' className={classes.label}> First name: </Typography>
											<Typography variant='subtitle1' > {` ${user.firstName}`}</Typography>
									</div>

									<S.IconContainer className={classes.iconButtons}>
										<IconButton id='firstname' onClick={updateProfileHandler}>
											<Edit style={{ color: '#1976d2' }} />
										</IconButton>
									</S.IconContainer>
								</S.DetailsContainer>
							</div>

							<div style={{ position: 'relative' }}>
								<S.DetailsContainer
									fullWidth
									className={classes.detailsContainer}
									id='lastname-container'
								>
									<div  className={classes.lastName}>
										<Typography variant='subtitle1' className={classes.label}> Last name: </Typography>
											<Typography variant='subtitle1' > {` ${user.lastName}`}</Typography>
									</div>

									<S.IconContainer className={classes.iconButtons}>
										<IconButton id='lastname' onClick={updateProfileHandler}>
											<Edit style={{ color: '#1976d2' }} />
										</IconButton>
									</S.IconContainer>
								</S.DetailsContainer>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>

			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={editProfileOpen}
				onClose={handleEditProfileClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={editProfileOpen}>
					<div className={classes.paper}>
						<div className={classes.profileTitleContainer}>
							<Typography
								variant='h5'
								className={classes.profileTitle}
								id='transition-modal-title'
							>
								{currentId === 'firstname'
									? 'Edit your first name'
									: 'Edit your last name'}
							</Typography>
							<IconButton className={classes.closeIconButton}><Close onClick={handleEditProfileClose} /></IconButton>
						</div>
						<hr />
						<div
							id='transition-modal-description'
							className={classes.modalBody}
						>
							<TextField
								label={
									currentId === 'firstname'
										? 'Edit first name'
										: 'Edit last name'
								}
								type='text'
								fullWidth
								className='mb-3'
								size='small'
								value={
									currentId === 'firstname'
										? userInputData.firstName
										: userInputData.lastName
								}
								onChange={e =>
									currentId === 'firstname'
										? setUserInputData({
												...userInputData,
												firstName: e.target.value,
										  })
										: setUserInputData({
												...userInputData,
												lastName: e.target.value,
										  })
								}
							/>

							<Button
								variant='contained'
								// className='mt-4'
								style={{ marginTop: '7rem' }}
								color='primary'
								fullWidth
								// type='submit'
								onClick={submitHandler}
							>
								Save
							</Button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default EntryForm;
