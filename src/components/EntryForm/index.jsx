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

const EntryForm = ({ currentId, setCurrentId, open, setOpen }) => {
	const [entryData, setEntryData] = useState({
		name: '',
		category: '',
		amount: '',
		type: '',
		date: new Date(),
		time: new Date(),
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	// const [entryName, setEntryName] = useState('')

	const entry = useSelector(state =>
		currentId ? state.entries.find(e => e._id === currentId) : null
	);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		if (entry) setEntryData(entry);
	}, [entry]);

	useEffect(() => {
		dispatch(getEntries(entryData));
		clear()
	}, [isSubmitted]);

	const submitHandler = e => {
		e.preventDefault();

		if (currentId) {
			dispatch(updateEntry(currentId, entryData));
		} else {
			dispatch(createEntry(entryData));
		}

		dispatch(getEntries(entryData));

		clear();
		handleClose();
		setIsSubmitted(!isSubmitted);
	};

	const clear = () => {
		setCurrentId(null);
		setEntryData({
			name: '',
			category: '',
			amount: '',
			type: '',
			date: new Date(),
			time: new Date(),
		});
	};

	const handleClose = () => {
		setOpen(false);
	};

	//Dialog

	const cashOutHandler = () => {
		setEntryData({ ...entryData, type: 'expense' });

		setOpen(true);
	};

	const cashInHandler = () => {
		setEntryData({ ...entryData, type: 'income' });

		setOpen(true);
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
					<form className={classes.form} onSubmit={submitHandler}>
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
										onChange={e =>
											setEntryData({ ...entryData, date: e.target.value })
										}
										required
									/>

									<MuiPickers.TimePicker
										className={classes.timePicker}
										variant='inline'
										autoOk
										size='small'
										inputVariant='outlined'
										value={entryData.time}
										onChange={e =>
											setEntryData({ ...entryData, time: e.target.value })
										}
										required
									/>
								</div>
							</Grid>
						</MuiPickers.MuiPickersUtilsProvider>
						<TextField
							label='Enter entry name'
							type='text'
							fullWidth
							className='mb-3 mt-3'
							size='small'
							value={entryData.name}
							onChange={e =>
								setEntryData({ ...entryData, name: e.target.value })
							}
						/>
						<TextField
							label='Enter amount'
							type='number'
							fullWidth
							className='mb-3'
							size='small'
							value={entryData.amount}
							onChange={e =>
								setEntryData({
									...entryData,
									amount: parseFloat(e.target.value),
								})
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
									<MenuItem value='Food'>Food</MenuItem>
									<MenuItem value='Salary'>Salary</MenuItem>
									<MenuItem value='Bills'>Bills</MenuItem>
								</Select>
							</FormControl>
							<Button variant='outlined' className={classes.addCategory}>
								<Add />
							</Button>
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
							type='submit'
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
