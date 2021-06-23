import React from 'react';
import useStyles from './styles';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	IconButton,
} from '@material-ui/core';
import { Delete, MoreHoriz, Edit } from '@material-ui/icons';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry } from 'redux/actions/entries';
import { deleteCategory, getCategories } from 'redux/actions/categories';
import * as format from 'utils/date';
import Swal from 'sweetalert2';
import * as S from './styles';
import defaultCategories from 'data/defaultCategories.json';

const Category = ({ category, setCurrentCategoryId, setCategoryOpen, setOpen,setEntryFormOpen }) => {
	const classes = useStyles();
	// console.log(entry);
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories);

	// const [hovered, setHovered] = React.useState(false);
	// const toggleHover = () => setHovered(!hovered);

	const today = new Date();

	// React.useEffect(() => {
	// 	dispatch(getCategories());
	// 	setCategoryData([...defaultCategories,...categories])
	// },[open])

	const updateCategoryHandler = () => {
		// dispatch(getCategories());
		// setCategoryData([...defaultCategories,...categories])
		setCurrentCategoryId(category._id);
		setCategoryOpen(true);
		// setCategoryData([...defaultCategories,...categories])
		// dispatch(getCategories());
		// setCategoryData([...defaultCategories, ...categories])

		// console.log('category data when edit icon button is clicked: ',[...defaultCategories,...categories])
	};

	const deleteCategoryHandler = () => {
		setEntryFormOpen(false);
		console.log('Deleted.')
		dispatch(deleteCategory(category._id));
	};

	return (
		<S.EntryContainer
			fullWidth
			className={classes.container}
			id='entry-container'
		>
			<p className={classes.category}>{category.name}</p>

			<S.IconContainer className={classes.iconButtons}>
				<IconButton onClick={updateCategoryHandler}>
					<Edit style={{ color: '#1976d2' }} />
				</IconButton>
				<IconButton onClick={deleteCategoryHandler}>
					<Delete id='delete-icon' style={{ color: '#e74c3c', zIndex: 9999 }} />
				</IconButton>
			</S.IconContainer>
		</S.EntryContainer>
	);
};

export default Category;
