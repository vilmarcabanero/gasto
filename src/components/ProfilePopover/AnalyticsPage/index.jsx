import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import * as S from './styles';
import { withStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import * as MuiPickers from '@material-ui/pickers';
import {
	Close,
	PhotoCamera,
	Add,
	Remove,
	Edit,
	ShowChart,
} from '@material-ui/icons';
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
	Tabs,
	Tab,
	Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
import MonthlyExpenseChart from 'components/Charts/MonthlyExpenseChart';
import MonthlyIncomeChart from 'components/Charts/MonthlyIncomeChart';
import ExpenseIncomeChart from 'components/Charts/ExpenseIncomeChart';


//Tabs
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

const useStylesTabs = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));
//Tabs

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
	const tabClasses = useStylesTabs();
	const { user, setUser } = React.useContext(UserContext);

	const [userInputData, setUserInputData] = useState({
		firstName: '',
		lastName: '',
	});

	const [profilePageOpen, setProfilePageOpen] = React.useState(false);
	const [editProfileOpen, setEditProfileOpen] = React.useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentId, setCurrentId] = useState('');

	//Tabs
	const [value, setValue] = React.useState('monthly-expense');
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	//Tabs

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
				<ShowChart style={{ marginRight: 5 }} />
				<Typography variant='subtitle1' style={{ marginRight: 80 }}>
					Analytics
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
						<div className={classes.titleContainer}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label='wrapped label tabs example'
							>
								<Tab
									value='monthly-expense'
									label='Monthly Expense'
									wrapped
									{...a11yProps('one')}
								/>
								<Tab
									value='monthly-income'
									label='Monthly Income'
									{...a11yProps('two')}
								/>
								<Tab
									value='expense-income'
									label='Expense-Income'
									{...a11yProps('three')}
								/>
							</Tabs>
							<IconButton className={classes.closeIconButton}>
								<Close onClick={handleClose} />
							</IconButton>
						</div>
						<hr />
						<div
							id='transition-modal-description'
							className={classes.modalBody}
						>
							<div className={classes.root}>
								<TabPanel value={value} index='monthly-expense'>
									<MonthlyExpenseChart />
								</TabPanel>
								<TabPanel value={value} index='monthly-income'>
									<MonthlyIncomeChart />
								</TabPanel>
								<TabPanel value={value} index='expense-income'>
									<ExpenseIncomeChart />
								</TabPanel>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default EntryForm;
