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
	//Category
	Radio,
	RadioGroup,
	FormControlLabel,
	FormLabel,
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEntry, getEntries, updateEntry } from 'redux/actions/entries';
import {
	createCategory,
	getCategories,
	updateCategory,
} from 'redux/actions/categories';

//Modal
const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(3),
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
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

const CategoryForm = ({
	currentCategoryId,
	setCurrentCategoryId,
	categoryOpen,
	setCategoryOpen,
	entryData,
	entryOpen,
	setEntryOpen,
	// isCategoryAddSubmitted,
	// setIsCategoryAddSubmitted,
	setDoneFetchingCategories,
}) => {
	const [categoryInputData, setCategoryInputData] = useState({
		name: '',
		type: '',
	});

	const [open, setOpen] = useState(false);

	const [isSubmitted, setIsSubmitted] = useState(false);
	const dispatch = useDispatch();

	// const handleChange = (event) => {
	//   setValue(event.target.value);
	// };

	// const [entryName, setEntryName] = useState('')

	const category = useSelector(state =>
		currentCategoryId
			? state.categories.find(c => c._id === currentCategoryId)
			: null
	);
	const classes = useStyles();
	// const dispatch = useDispatch();

	const clear = () => {
		// setCurrentCategoryId(null);
		setCategoryInputData({
			name: '',
			type: '',
		});
	};

	useEffect(() => {
		if (category) setCategoryInputData(category);
	}, [category]);

	useEffect(() => {
		dispatch(getCategories());
		// setIsCategoryAddSubmitted(false);
	}, [open, dispatch, categoryOpen]);

	// useEffect(() => {
	// 	dispatch(getEntries(entryData));
	// }, [open, dispatch, entryData]);

	const submitAddCategoryHandler = () => {
		if (currentCategoryId) {
			dispatch(updateCategory(currentCategoryId, categoryInputData));
			console.log('Successfully updated');
			setCurrentCategoryId(null);
		} else {
			dispatch(createCategory(categoryInputData));
		}

		// dispatch(getCategories());

		clear();
		handleClose();

		// setTimeout(() => {
		// 	setIsCategoryAddSubmitted(true);
		// }, 5000);
	};

	const handleClose = () => {
		setOpen(false);
		setEntryOpen(false);
		setCategoryOpen(false); //Gamitin lang para kapag mag bago ang state, mag rerender ang entry form at ma run to setCategoryData([...defaultCategories, ...categories]);
		clear();
	};

	//Dialog

	const addCategoryHandler = () => {
		setCategoryInputData({
			...categoryInputData,
			type: entryData.type === 'income' ? 'income' : 'expense',
		});
		setOpen(true);
		setEntryOpen(true);
		setCategoryOpen(true);
		console.log(currentCategoryId);
	};

	return (
		<div className={classes.modalContainer}>
			<Button onClick={addCategoryHandler}>
				<Add />
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={categoryOpen}
				// maxWidth='xs'
				className={classes.dialog}
			>
				<MuiDialogTitle id='customized-dialog-title' onClose={handleClose}>
					<div
						className={
							entryData.type === 'income'
								? classes.incomeTitle
								: classes.expenseTitle
						}
					>
						{currentCategoryId ? 'Edit ' : 'Add '} a Category
					</div>
					{/* false === currentCategoryId to */}
				</MuiDialogTitle>

				<MuiDialogContent dividers>
					<div className={classes.form}>
						<TextField
							label='Enter category name'
							type='text'
							fullWidth
							className='mb-4 mt-0'
							size='small'
							value={categoryInputData.name}
							onChange={e =>
								setCategoryInputData({
									...categoryInputData,
									name: e.target.value,
								})
							}
						/>

						<Button
							variant='contained'
							className='mb-2'
							fullWidth
							color='primary'
							// type='submit'
							onClick={submitAddCategoryHandler}
						>
							Save
						</Button>
					</div>
				</MuiDialogContent>
			</Dialog>
		</div>
	);
};

export default CategoryForm;
