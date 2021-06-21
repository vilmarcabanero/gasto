import React, { useState, useSelector } from 'react';
import { uniqueId } from 'utils/math';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import * as MuiPickers from '@material-ui/pickers';
//Dialog
import { withStyles } from '@material-ui/core/styles';
import * as Mui from '@material-ui/core';
import * as MuiIcon from '@material-ui/icons';
import StylesProvider from '@material-ui/styles/StylesProvider';
import * as S from './styles';

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const MuiDialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props;
	return (
		<Mui.DialogTitle disableTypography className={classes.root} {...other}>
			<Mui.Typography variant='h6'>{children}</Mui.Typography>
			{onClose ? (
				<Mui.IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={onClose}
				>
					<MuiIcon.Close />
				</Mui.IconButton>
			) : null}
		</Mui.DialogTitle>
	);
});

const MuiDialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2),
	},
}))(Mui.DialogContent);

const EntryForm = ({ onNewTransaction }) => {
	const [enteredDate, setEnteredDate] = useState(new Date());
	const [enteredTime, setEnteredTime] = useState(new Date());

	let dateNow = enteredDate.toLocaleDateString();
	// alert(dateNow)

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
			<S.SearchButtonContainer>
				{/* <S.SearchBar placeholder='Search by remarks' /> */}
				<S.StyledButton onClick={handleClickOpen} className='mb-3'>
					New Transaction
				</S.StyledButton>
			</S.SearchButtonContainer>

			<Mui.Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
				maxWidth='xs'
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
											inputVariant='outlined'
											value={enteredDate}
											onChange={e => setEnteredDate(e.target.value)}
											required
											style={{ width: '99.5%' }}
										/>
										<S.DatePickerPlaceholder>Date</S.DatePickerPlaceholder>
									</S.DatePickerContainer>

									<S.DatePickerContainer>
										<MuiPickers.TimePicker
											className='datePicker'
											variant='inline'
											autoOk
											inputVariant='outlined'
											value={enteredTime}
											onChange={e => setEnteredTime(e.target.value)}
											required
											style={{ width: '99.5%' }}
										/>
										<S.DatePickerPlaceholder>Time</S.DatePickerPlaceholder>
									</S.DatePickerContainer>
								</S.DatePickerContainerFlex>
							</Grid>
						</MuiPickers.MuiPickersUtilsProvider>

						<S.Label>
							<Mui.Button variant='outlined'>
								<MuiIcon.PhotoCamera />
								Attach Bill
							</Mui.Button>
						</S.Label>
					</S.Form>
				</MuiDialogContent>
				<Mui.DialogContent>
					<Grid container justify='space-around'>
						<S.CashInButton
							style={{ width: '51%' }}
							id='cashin-button'
							onClick={cashInHandler}
							type='submit'
						>
							<MuiIcon.Add /> Cash in
						</S.CashInButton>
						<S.CashOutButton
							style={{ width: '51%' }}
							id='cashout-button'
							onClick={cashOutHandler}
							type='submit'
						>
							<MuiIcon.Remove /> Cash out
						</S.CashOutButton>
					</Grid>
				</Mui.DialogContent>
			</Mui.Dialog>
		</StylesProvider>
	);
};

export default EntryForm;
