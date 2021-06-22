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
import { getCategories } from 'redux/actions/categories';

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
	// currentCategoryId,
	// setCurrentCategoryId,
	// open,
	// setOpen,
	entryData,
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

	// const category = useSelector(state =>
	// 	currentCategoryId ? state.categories.find(e => e._id === currentCategoryId) : null
	// );
	const classes = useStyles();
	// const dispatch = useDispatch();

	const clear = () => {
		// setCurrentCategoryId(null);
		setCategoryInputData({
			name: '',
			type: '',
		});
	};

	// useEffect(() => {
	// 	if (category) setCategoryInputData(category);
	// }, [category]);

	useEffect(() => {
		dispatch(getCategories());
	}, [open, dispatch]);

	// useEffect(() => {
	// 	dispatch(getEntries(entryData));
	// }, [open, dispatch, entryData]);

	const submitAddCategoryHandler = () => {
		console.log('Category added successfully.');
		console.log(`Category name: ${categoryInputData.name}`);
		console.log(`Category type: ${categoryInputData.type}`);

		// if (currentCategoryId) {
		// 	dispatch(updateEntry(currentCategoryId, categoryInputData));
		// } else {
		// 	dispatch(createEntry(currentCategoryId));
		// }

		// dispatch(getEntries(entryData, setDoneFetchingEntries)); dapat getCategories?
		clear();
		handleClose();
	};

	const handleClose = () => {
		setOpen(false);
		clear();
	};

	//Dialog

	const addCategoryHandler = () => {
		setCategoryInputData({
			...categoryInputData,
			type: entryData.type === 'income' ? 'income' : 'expense',
		});
		setOpen(true);
	};

	return (
		<div className={classes.modalContainer}>
			<Button onClick={addCategoryHandler}>
				<Add />
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
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
						{false ? 'Edit ' : 'Add '} a Category
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

						{/* <div className={`${classes.category} mb-4 mt-2`}>
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Category Type</FormLabel>
								<RadioGroup
									aria-label='category'
									name='category1'
									value={categoryInputData.type}
									onChange={e =>
										setCategoryInputData({
											...categoryInputData,
											type: e.target.value,
										})
									}
								>
									<div className={classes.radioGroup}>
										<FormControlLabel
											value='income'
											control={<Radio />}
											label='Income'
										/>
										<FormControlLabel
											value='expense'
											control={<Radio />}
											label='Expense'
										/>
									</div>
								</RadioGroup>
							</FormControl>
						</div> */}

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
