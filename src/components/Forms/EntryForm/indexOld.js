import React, { useState, useSelector } from 'react';
import { uniqueId } from 'utils/math';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import * as MuiPickers from '@material-ui/pickers';
//Dialog
import { withStyles } from '@material-ui/core/styles';
import {
	DialogTitle,
	Typography,
	IconButton,
	DialogContent,
	Button,
	Dialog,
	TextField
} from '@material-ui/core';
import { Close, PhotoCamera, Add, Remove } from '@material-ui/icons';
import StylesProvider from '@material-ui/styles/StylesProvider';
import * as S from './styles';
import useStyles from './styles';

const EntryForm = ({ onNewTransaction }) => {
	const classes = useStyles();
	const [enteredDate, setEnteredDate] = useState(new Date());
	const [enteredTime, setEnteredTime] = useState(new Date());
	

	let dateNow = enteredDate.toLocaleDateString();
	// alert(dateNow)

	//Modal
	const styles = theme => ({
		root: {
			margin: 0,
			padding: theme.spacing(3),
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
	});

	const MuiDialogTitle = withStyles(styles)(props => {
		const { children, classes, onClose, ...other } = props;
		return (
			<DialogTitle disableTypography className={classes.root} {...other}>
				<Typography variant='h6'>{children}</Typography>
				{onClose ? (
					<IconButton
						aria-label='close'
						onClick={onClose}
					>
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

	//Modal

	const addTransaction = (type, evt) => {
		evt.preventDefault();

		let month = enteredDate.toLocaleString('en-US', { month: 'long' });
		let day = enteredDate.toLocaleString('en-US', { day: '2-digit' });
		let year = enteredDate.getFullYear();

		let hr = enteredTime.getHours();
		let min = enteredTime.getMinutes();

		const time = () => {
			if (min < 10) {
				min = '0' + min;
			}

			let ampm = 'AM';

			if (hr >= 12) {
				hr -= 12;
				ampm = 'PM';
			}

			if (hr === 0) {
				hr = 12;
			}

			if (hr < 10) {
				hr = '0' + hr;
			}

			return `${hr}:${min} ${ampm}`;
		};

		const date = () => {
			if (enteredDate.toLocaleDateString() === dateNow) {
				// return 'Today'
				return `${day}, ${month} ${year}`;
			} else {
				return `${day}, ${month} ${year}`;
			}
		};

		// const data = {
		// 	id: uniqueId(),
		// 	name: nameValue,
		// 	amount: parseFloat(amountValue),
		// 	day: day,
		// 	month: month,
		// 	year: year,
		// 	date: date(),
		// 	time: time(),
		// 	type: type,
		// };

		// onNewTransaction(data);
	};

	//Dialog
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const cashOutHandler = e => {
		e.preventDefault();

		setOpen(false);
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
	};

	const cashInHandler = e => {
		e.preventDefault();

		setOpen(false);

		// if (amountValue.trim('').length !== 0 && nameValue.trim().length !== 0) {
		// 	addTransaction('income', e);
		// } else if (amountValue.trim('').length === 0) {
		// 	alert('Please fill up the amount');
		// 	setOpen(true);
		// } else if (nameValue.trim().length === 0) {
		// 	alert('Please fill up the remarks');
		// 	setOpen(true);
		// }
	};

	return (
		<StylesProvider injectFirst>
			<Button
				variant='contained'
				color='primary'
				onClick={handleClickOpen}
				className='mb-3'
			>
				New Transaction
			</Button>

			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
				// maxWidth='xs'
				className={classes.dialog}
			>
				<MuiDialogTitle id='customized-dialog-title' onClose={handleClose}>
					{false ? 'Edit ' : 'Add '} an Entry
				</MuiDialogTitle>

				<MuiDialogContent dividers>
					<S.Form>
						<MuiPickers.MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container justify='space-around'>
								<S.DatePickerContainerFlex>
									<S.DatePickerContainer>
										<MuiPickers.DatePicker
											className='datePicker'
											variant='inline'
											autoOk
											size='small'
											inputVariant='outlined'
											value={enteredDate}
											onChange={e => setEnteredDate(e.target.value)}
											required
											style={{ width: '99.5%' }}
										/>
									</S.DatePickerContainer>

									<div className='date-picker-container'>
										<MuiPickers.TimePicker
											className='datePicker'
											variant='inline'
											autoOk
											size='small'
											inputVariant='outlined'
											value={enteredTime}
											onChange={e => setEnteredTime(e.target.value)}
											required
											style={{ width: '99.5%' }}
										/>
									</div>
								</S.DatePickerContainerFlex>
							</Grid>
						</MuiPickers.MuiPickersUtilsProvider>


						<S.Label>
							<Button variant='outlined'>
								<PhotoCamera />
								Attach Bill
							</Button>
						</S.Label>
					</S.Form>
				</MuiDialogContent>
				<MuiDialogContent className={classes.cashButton}>
					<Button className={classes.cashInButton} onClick={cashInHandler}>
						<Add /> Cash in
					</Button>
					<Button className={classes.cashOutButton} onClick={cashOutHandler}>
						<Remove /> Cash out
					</Button>
				</MuiDialogContent>
			</Dialog>
		</StylesProvider>
	);
};

export default EntryForm;
