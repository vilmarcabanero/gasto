import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import * as MuiPickers from '@material-ui/pickers';
import { Close, PhotoCamera, Add, Edit, Remove } from '@material-ui/icons';
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
import { createEntry, updateEntry } from 'redux/actions/entries';
import { Card } from 'react-bootstrap';

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
			<Typography variant='h6'>{children}</Typography>
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
		padding: theme.spacing(2),
	},
}))(DialogContent);

const EntryForm = ({ currentId, setCurrentId }) => {
	const [entryData, setEntryData] = useState({
		name: '',
		category: '',
		amount: '',
		type: '',
	});
	const [open, setOpen] = useState(false);
	const entry = useSelector(state =>
		currentId ? state.entries.find(p => p._id === currentId) : null
	);
	const classes = useStyles();
	const dispatch = useDispatch();

	const [enteredDate, setEnteredDate] = useState(new Date());
	const [enteredTime, setEnteredTime] = useState(new Date());

	let dateNow = enteredDate.toLocaleDateString();

	useEffect(() => {
		if (entry) setEntryData(entry);
	}, [entry]);

	const addTransaction = (type, evt) => {
		evt.preventDefault();

		
	};

	const submitHandler = e => {
		e.preventDefault();

		console.log('Transaction added.');

		// if (currentId) {
		// 	dispatch(updateEntry(currentId, entryData));
		// } else {
		// 	dispatch(createEntry(entryData));
		// }

		clear();
		handleClose();
	};

	const clear = () => {
		setCurrentId(null);
		setEntryData({
			name: '',
			category: '',
			amount: '',
			type: '',
		});
	};

	const handleClose = () => {
		setOpen(false);
	};

	//Dialog

	const handleClickOpen = () => {
		setOpen(true);
	};

	const cashOutHandler = e => {
		e.preventDefault();
		setEntryData({ ...entryData, type: 'expense' });

		setOpen(true);
		// 	if (amountValue.trim('').length !== 0 && nameValue.trim().length !== 0) {
		// 		addTransaction('expense', e);
		// 	} else if (amountValue.trim('').length === 0) {
		// 		alert('Please fill up the amount');
		// 		setOpen(true);
		// 	} else if (nameValue.trim().length === 0) {
		// 		alert('Please fill up the remarks');
		// 		setOpen(true);
		// 	}
		// };

		// if (currentId) {
		// 	dispatch(updateEntry(currentId, entryData));
		// } else {
		// 	dispatch(createEntry(entryData));
		// }

		// clear();
		// handleClose();
	};

	const cashInHandler = e => {
		e.preventDefault();
		setEntryData({ ...entryData, type: 'income' });

		setOpen(true);

		// if (amountValue.trim('').length !== 0 && nameValue.trim().length !== 0) {
		// 	addTransaction('income', e);
		// } else if (amountValue.trim('').length === 0) {
		// 	alert('Please fill up the amount');
		// 	setOpen(true);
		// } else if (nameValue.trim().length === 0) {
		// 	alert('Please fill up the remarks');
		// 	setOpen(true);
		// }

		// if (currentId) {
		// 	dispatch(updateEntry(currentId, entryData));
		// } else {
		// 	dispatch(createEntry(entryData));
		// }

		// clear();
		// handleClose();
	};

	return (
		<div className={classes.modalContainer}>
			<Button className={classes.cashInButton} onClick={cashInHandler}>
				<Add /> Cash in
			</Button>
			<Button className={classes.cashOutButton} onClick={cashOutHandler}>
				<Remove /> Cash out
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
				// maxWidth='xs'
				className={classes.dialog}
			>
				<MuiDialogTitle id='customized-dialog-title' onClose={handleClose}>
					{false ? 'Edit ' : 'Add '} an{' '}
					{entryData.type === 'income' ? 'Income' : 'Expense'}
				</MuiDialogTitle>

				<MuiDialogContent dividers>
					<form className={classes.form} onSubmit={submitHandler}>
						<MuiPickers.MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container justify='space-around'>
								<div className={classes.datePickerContainerFlex}>
									<MuiPickers.DatePicker
										className={classes.datePicker}
										variant='inline'
										autoOk
										size='small'
										inputVariant='outlined'
										value={enteredDate}
										onChange={e => setEnteredDate(e.target.value)}
										required
									/>

									<MuiPickers.TimePicker
										className={classes.timePicker}
										variant='inline'
										autoOk
										size='small'
										inputVariant='outlined'
										value={enteredTime}
										onChange={e => setEnteredTime(e.target.value)}
										required
									/>
								</div>
							</Grid>
						</MuiPickers.MuiPickersUtilsProvider>
						<TextField
							label='Enter entry name'
							fullWidth
							className='mb-2 mt-2'
							size='small'
							value={entryData.name}
							onChange={e =>
								setEntryData({ ...entryData, name: e.target.value })
							}
						/>
						<TextField
							label='Enter amount'
							fullWidth
							className='mb-2'
							size='small'
							value={entryData.amount}
							onChange={e =>
								setEntryData({ ...entryData, amount: e.target.value })
							}
						/>

						<div className={`${classes.category} mb-3`}>
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
									<MenuItem value='Food'>Food</MenuItem>
									<MenuItem value='Salary'>Salary</MenuItem>
									<MenuItem value='Bills'>Bills</MenuItem>
								</Select>
							</FormControl>
							<Button variant='outlined' className={classes.addCategory}>
								<Add />
							</Button>
						</div>

						<Button variant='outlined' className=''>
							<PhotoCamera />
							Attach Bill
						</Button>
					</form>
				</MuiDialogContent>
				{/* <MuiDialogContent className={classes.cashButton}>
					<Button className={classes.cashInButton} onClick={cashInHandler}>
						<Add /> Cash in
					</Button>
					<Button className={classes.cashOutButton} onClick={cashOutHandler}>
						<Remove /> Cash out
					</Button>
				</MuiDialogContent> */}
				<MuiDialogContent className={classes.cashButton}>
					{/* {entryData.type === 'income' ? <Button className={classes.cashInButton} onClick={cashInHandler}>
						<Add /> Cash in
					</Button> : <Button className={classes.cashOutButton} onClick={cashOutHandler}>
						<Remove /> Cash out
					</Button>} */}
					<Button variant='contained' fullWidth color='primary' type='submit'>
						Save
					</Button>
				</MuiDialogContent>
			</Dialog>
		</div>
	);
};

export default EntryForm;
