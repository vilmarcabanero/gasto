import React, { useState } from 'react';
import Search from 'material-ui-search-bar';

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<Search
			value={searchValue}
			onChange={() => console.log('onChange')}
			onRequestSearch={() => console.log(searchValue, ' is search.')}
			style={{
				maxWidth: 500,
				width: '100%',
				marginBottom: 22,
			}}
		/>
	);
};

export default SearchBar;
