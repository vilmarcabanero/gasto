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

const CategoryForm = ({
	// currentCategoryId,
	// setCurrentCategoryId,
	// open,
	// setOpen,
	setDoneFetchingCategories,
}) => {
	const [categoryData, setCategoryData] = useState({
		name: '',
		type: 'income',
	});

	const [open, setOpen] = useState(false);

	const [isSubmitted, setIsSubmitted] = useState(false);

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
		setCategoryData({
			name: '',
			type: '',
		});
	};

	// useEffect(() => {
	// 	if (category) setCategoryData(category);
	// }, [category]);

	// useEffect(() => {
	// 	dispatch(getEntries(entryData));
	// }, [open, dispatch, entryData]);

	const submitAddCategoryHandler = () => {
		console.log('Category added successfully.');
		console.log(`Category name: ${categoryData.name}`);
		console.log(`Category type: ${categoryData.type}`);

		// if (currentCategoryId) {
		// 	dispatch(updateEntry(currentCategoryId, categoryData));
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
					<div>{false ? 'Edit ' : 'Add '} a Category</div>
					{/* false === currentCategoryId to */}
				</MuiDialogTitle>

				<MuiDialogContent dividers>
					<form className={classes.form}>
						<TextField
							label='Enter category name'
							type='text'
							fullWidth
							className='mb-4 mt-0'
							size='small'
							value={categoryData.name}
							onChange={e =>
								setCategoryData({ ...categoryData, name: e.target.value })
							}
						/>

						<div className={`${classes.category} mb-4 mt-2`}>
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Category Type</FormLabel>
								<RadioGroup
									aria-label='category'
									name='category1'
									value={categoryData.type}
									onChange={e =>
										setCategoryData({
											...categoryData,
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
						</div>

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
					</form>
				</MuiDialogContent>
			</Dialog>
		</div>
	);
};

export default CategoryForm;
