import React, { useState } from 'react';
import Search from 'material-ui-search-bar';

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const people = [
		'Siri',
		'Alexa',
		'Google',
		'Facebook',
		'Twitter',
		'Linkedin',
		'Sinkedin',
	];

	React.useEffect(() => {
		const results = people.filter(person =>
			person.toLowerCase().includes(searchValue)
		);
		setSearchResults(results);
	}, [searchValue]);

	console.log(searchValue);

	return (
		<Search
			value={searchValue}
			onChange={e => setSearchValue(e)}
			onRequestSearch={() => console.log(searchValue, ' is searched.')}
			style={{
				maxWidth: 500,
				width: '100%',
				marginBottom: 22,
			}}
		/>
	);
};

export default SearchBar;
