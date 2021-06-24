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
import { validateAddEntry } from 'utils/validator';
import * as S from './styles';
import validator from 'validator';

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
	currentId,
	setCurrentId,
	currentCategoryId,
	setCurrentCategoryId,
	open,
	setOpen,
	categoryOpen,
	setCategoryOpen,
	setDoneFetchingEntries,
	// categories,
	categoryData,
	setCategoryData,
}) => {
	const [entryData, setEntryData] = useState({
		name: '',
		category: '',
		amount: '',
		balance: 0,
		type: '',
		date: new Date(),
		time: new Date(),
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	// const [isCategoryAddSubmitted, setIsCategoryAddSubmitted] = useState(null);

	// console.log(categories, 'categories');

	const [expenseCategories, setExpenseCategories] = useState([]);
	const [incomeCategories, setIncomeCategories] = useState([]);

	const entries = useSelector(state => state.entries);
	const categories = useSelector(state => state.categories);
	const [error, setError] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [confirmSubmit, setConfirmSubmit] = useState(false);

	// const [categoryData, setCategoryData] = useState([
	// 	...defaultCategories,
	// 	...categories,
	// ]);

	// const [entryName, setEntryName] = useState('')

	const entry = useSelector(state =>
		currentId ? state.entries.find(e => e._id === currentId) : null
	);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
		// setCategoryData([...defaultCategories, ...categories]);
		// console.log('Done fetching categories')
	}, [dispatch, open]);

	useEffect(() => {
		setCategoryData([...defaultCategories, ...categories]);

		console.log('Successfully re-rendered Entry Form.');
		// if (isCategoryAddSubmitted) {
		// 	setOpen(true);
		// }
	}, [open, categoryOpen, categories]);

	const clear = () => {
		setCurrentId(null);
		setEntryData({
			name: '',
			category: '',
			amount: '',
			balance: 0,
			type: '',
			date: moment(new Date()),
			time: moment(new Date()),
		});
	};

	useEffect(() => {
		if (entry) setEntryData(entry);
	}, [entry]);

	useEffect(() => {}, []);

	// useEffect(() => {
	// 	dispatch(getEntries(entryData));
	// }, [open, dispatch, entryData]);

	const submitHandler = e => {
		e.preventDefault();

		// validateAddEntry(
		// 	setIsValid,
		// 	setError,
		// 	entryData,
		// 	setEntryData,
		// 	setConfirmSubmit
		// );
		// console.log('Current balance', entryData.balance);
		// console.log('Confirm submit.', confirmSubmit)

		setTimeout(() => {
			setIsValid(true);
		}, 4000);
		if (validator.isEmpty(String(entryData.amount))) {
			setIsValid(false);
			setError(`Entry amount can't be empty.`);
		} else if (validator.isEmpty(String(entryData.name))) {
			setIsValid(false);
			setError(`Entry name can't be empty.`);
		} else if (validator.isEmpty(String(entryData.category))) {
			setIsValid(false);
			setError(`Entry category can't be empty.`);
		} else {
			if (currentId) {
				dispatch(updateEntry(currentId, entryData));
			} else {
				dispatch(createEntry(entryData));
			}
			setConfirmSubmit(true);
			clear();
			handleClose();
			dispatch(getEntries(entryData, setDoneFetchingEntries));
			dispatch(getCategories());

			setIsSubmitted(!isSubmitted);
			setCategoryData([...defaultCategories, ...categories]);
		}
	};

	const handleClose = () => {
		setOpen(false);
		clear();
		setCategoryData([...defaultCategories, ...categories]);
		dispatch(getCategories());
	};

	//Dialog

	const categoryNameSorter = categories => {
		const sortedCategories = categories.sort((a, b) => {
			let categoryNameA = a.name.toUpperCase(); // ignore upper and lowercase
			let categoryNameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (categoryNameA < categoryNameB) {
				return -1; //categoryNameA comes first
			}
			if (categoryNameA > categoryNameB) {
				return 1; // categoryNameB comes first
			}
			return 0; // names must be equal
		});

		return sortedCategories;
	};

	const cashOutHandler = () => {
		setEntryData({ ...entryData, type: 'expense' });
		const expenseCategories = categoryData.filter(
			category => category.type === 'expense'
		);

		const sortedExpenseCategories = categoryNameSorter(expenseCategories);

		setExpenseCategories(sortedExpenseCategories);
		setOpen(true);
		setCategoryData([...defaultCategories, ...categories]);
		dispatch(getCategories());
	};

	const cashInHandler = () => {
		setEntryData({ ...entryData, type: 'income' });
		const incomeCategories = categoryData.filter(
			category => category.type === 'income'
		);

		const sortedIncomeCategories = categoryNameSorter(incomeCategories);
		setIncomeCategories(sortedIncomeCategories);
		setOpen(true);
		setCategoryData([...defaultCategories, ...categories]);
		dispatch(getCategories());
	};

	// setEntryData({
	// 	...entryData,
	// 	balance:
	// 		entryData.type === 'income'
	// 			? parseFloat(entryData.balance) + parseFloat(entryData.amount)
	// 			: parseFloat(entryData.balance) - parseFloat(entryData.amount),
	// });

	const amountEntryDataHandler = e => {
		setEntryData({
			...entryData,
			amount: parseFloat(e.target.value),
		});

		// console.log('amount ',entryData.amount)
		// console.log('balance ', entryData.balance);
	};

	const dateChangeHandler = e => {
		setEntryData({ ...entryData, date: moment(e) });
		// console.log(e);
	};

	const timeChangeHandler = e => {
		setEntryData({ ...entryData, time: e });
		// console.log(e);
	};

	// console.log(entryData.time, entryData.date);

	// entries.forEach(entry => {
	// 	if(entry.type === 'income') {
	// 		set
	// 	}
	// });

	return (
		<div className={classes.modalContainer}>
			<div className={classes.cashButtons}>
				<Button className={classes.cashInButton} onClick={cashInHandler}>
					<Add /> Cash in
				</Button>
				<Button className={classes.cashOutButton} onClick={cashOutHandler}>
					<Remove /> Cash out
				</Button>
			</div>
			<S.StyledDialog
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
						{currentId ? 'Edit ' : 'Add '} an
						{entryData.type === 'income' ? ' Income' : ' Expense'}
					</div>
				</MuiDialogTitle>

				<MuiDialogContent dividers>
					<S.Form className={classes.form}>
						<MuiPickers.MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container justify='space-around' className='mt-3'>
								<div className={classes.datePickerContainerFlex}>
									<MuiPickers.DatePicker
										className={classes.datePicker}
										variant='inline'
										autoOk
										size='small'
										inputVariant='outlined'
										value={entryData.date}
										onChange={dateChangeHandler}
										required
									/>

									<MuiPickers.TimePicker
										className={classes.timePicker}
										variant='inline'
										autoOk
										size='small'
										inputVariant='outlined'
										value={entryData.time}
										onChange={timeChangeHandler}
										required
									/>
								</div>
							</Grid>
						</MuiPickers.MuiPickersUtilsProvider>
						<TextField
							label='Enter amount'
							type='number'
							fullWidth
							className='mb-3 mt-3'
							size='small'
							value={entryData.amount}
							onChange={amountEntryDataHandler}
						/>

						<TextField
							label='Enter entry name'
							type='text'
							fullWidth
							className='mb-3'
							size='small'
							value={entryData.name}
							onChange={e =>
								setEntryData({ ...entryData, name: e.target.value })
							}
						/>

						<div className={`${classes.category} mb-4`}>
							<FormControl size='small' className={`${classes.formControl}`}>
								<InputLabel id='demo-simple-select-label'>
									Select Category
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={entryData.category}
									onChange={e =>
										setEntryData({ ...entryData, category: e.target.value })
									}
								>
									{entryData.type === 'income'
										? incomeCategories.map(category => (
												<MenuItem key={category._id} value={category.name}>
													{category.name}
												</MenuItem>
										  ))
										: expenseCategories.map(category => (
												<MenuItem key={category._id} value={category.name}>
													{category.name}
												</MenuItem>
										  ))}
								</Select>
							</FormControl>
							<Categories
								currentCategoryId={currentCategoryId}
								setCurrentCategoryId={setCurrentCategoryId}
								categoryOpen={categoryOpen}
								setCategoryOpen={setCategoryOpen}
								setEntryFormOpen={setOpen}
							/>
							<div className={classes.addCategory}>
								{/* <Add /> */}

								<CategoryForm
									currentCategoryId={currentCategoryId}
									setCurrentCategoryId={setCurrentCategoryId}
									entryData={entryData}
									entryOpen={open}
									setEntryOpen={setOpen}
									categoryOpen={categoryOpen}
									setCategoryOpen={setCategoryOpen}
									// isCategoryAddSubmitted={isCategoryAddSubmitted}
									// setIsCategoryAddSubmitted={setIsCategoryAddSubmitted}
								/>
							</div>
						</div>

						<Button variant='outlined' className='mb-4 mt-1'>
							<PhotoCamera />
							Attach Bill
						</Button>
						<Button
							variant='contained'
							className='mb-2'
							fullWidth
							color='primary'
							// type='submit'
							onClick={submitHandler}
						>
							Save
						</Button>
						{!isValid && (
							<div className='error-container w-100'>
								<span className='error'>{error}</span>
								<IconButton>
									<Close
										className='close-icon'
										onClick={() => setIsValid(true)}
									/>
								</IconButton>
							</div>
						)}
					</S.Form>
				</MuiDialogContent>
			</S.StyledDialog>
		</div>
	);
};

export default EntryForm;
