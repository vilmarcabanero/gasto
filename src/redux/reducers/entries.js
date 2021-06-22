import * as CONST from 'utils/constants/actionTypes';

const reducer = (entries = [], action) => {
	switch (action.type) {
		case CONST.DELETE_ENTRY:
			return entries.filter(entry => entry._id !== action.payload);
		case CONST.UPDATE_ENTRY:
			return entries.map(entry =>
				entry._id === action.payload._id ? action.payload : entry
			);
		case CONST.CREATE_ENTRY:
			return [...entries]; //I removed the payload.
		case CONST.GET_ENTRIES:
			return action.payload;
		default:
			return entries;
	}
};

export default reducer;
