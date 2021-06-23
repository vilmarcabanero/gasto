import React, { useState } from 'react';
import {
	Grid,
	CircularProgress,
	Tabs,
	Tab,
	Box,
	Typography,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Add, Edit, Remove, DragHandle } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Category from './Category';
import useStyles from './styles';
import * as S from './styles'
import { withStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import moment from 'moment';
import {
	TextField,
	Button,
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
import { useDispatch } from 'react-redux';
import { createEntry, getEntries, updateEntry } from 'redux/actions/entries';
import { getCategories } from 'redux/actions/categories';
import CategoryForm from 'components/Forms/CategoryForm';
import defaultCategories from 'data/defaultCategories.json';

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

const Entries = ({
	setCurrentId,
	// open,
	// setOpen,
	doneFetchingEntries,
	setDoneFetchingEntries,
	// setCategoryData,
}) => {
	const entries = useSelector(state => state.entries);
	const classes = useStyles();

	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories);

	const [categoryData, setCategoryData] = useState([
		...defaultCategories,
		...categories,
	]);

	const [value, setValue] = React.useState('all');
	const [open, setOpen] = useState(false);

	const [entryType, setEntryType] = React.useState('income');
	const handleAlignment = (event, newEntryType) => {
		setEntryType(newEntryType);
	};
	console.log(entryType);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	//Para ishow ang incomeEntries lang or ang expense entries lang.
	const incomeCategories = categories.filter(category => category.type === 'income');
	// console.log('Income entries', incomeEntries);
	const expenseCategories = categories.filter(category => category.type === 'expense');
	// console.log('Expense entries', expenseEntries);

	// console.log(entries);

	const handleClose = () => {
		setOpen(false);
		setCategoryData([...defaultCategories, ...categories]);
		dispatch(getCategories());
	};

	return (
		<>
			<div className={classes.modalContainer}>
				<div className={classes.editIconContainer}>
					<Button onClick={() => setOpen(true)}>
						<Edit />
					</Button>
				</div>
				<Dialog
					onClose={handleClose}
					aria-labelledby='customized-dialog-title'
					open={open}
					// maxWidth='xs'
					className={classes.dialog}
				>
					<MuiDialogTitle id='customized-dialog-title' onClose={handleClose}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label='wrapped label tabs example'
							centered
						>
							<Tab value='income' label='Income' {...a11yProps('income')} />
							<Tab value='expense' label='Expense' {...a11yProps('expense')} />
						</Tabs>
					</MuiDialogTitle>

					<MuiDialogContent dividers>
						{/* <div className={classes.categoryList}>
							{categoryData.map(category => (
								<S.CategoryContainer key={category._id}>
									<Typography variant='subtitle1'>{category.name}</Typography>
								</S.CategoryContainer>
							))}
						</div> */}

<Grid item xs={12}>
					<TabPanel value={value} index='expense'>
						{expenseCategories.map(category => (
							<Grid item key={category._id} xs={12}>
								<Category
									category={category}
								/>
							</Grid>
						))}
					</TabPanel>
				</Grid>

				<Grid item xs={12}>
					<TabPanel value={value} index='income'>
						{incomeCategories.map(category => (
							<Grid item key={category._id} xs={12}>
								<Category
									category={category}
								/>
							</Grid>
						))}
					</TabPanel>
				</Grid>

					</MuiDialogContent>
				</Dialog>
			</div>
		</>
	);
};

export default Entries;
