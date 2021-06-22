import * as CONST from 'utils/constants/actionTypes';

const reducer = (categories = [], action) => {
	switch (action.type) {
		case CONST.DELETE_CATEGORY:
			return categories.filter(category => category._id !== action.payload);
		case CONST.UPDATE_CATEGORY:
			return categories.map(category =>
				category._id === action.payload._id ? action.payload : category
			);
		case CONST.CREATE_CATEGORY:
			return [...categories]; //I removed the payload.
		case CONST.GET_CATEGORIES:
			return action.payload;
		default:
			return categories;
	}
};

export default reducer;
