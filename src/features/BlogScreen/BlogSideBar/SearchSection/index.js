import { SearchForm } from '@components/Form';
import { createSearchParams, useNavigate } from 'react-router-dom';

function SearchSection() {
	const navigate = useNavigate();
	const handleSearch = (data) => {
		navigate({
			pathname: `search`,
			search: `?${createSearchParams({ title: data.value })}`,
		});
	};
	return <SearchForm setSearchKey={handleSearch} />;
}

export default SearchSection;
