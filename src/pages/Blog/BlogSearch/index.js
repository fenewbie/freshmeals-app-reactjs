import { useRouteLoaderData } from 'react-router-dom';
import SearchByTitle from '@features/SearchByTitle';

function SearchBlogsPage() {
	const { blogs } = useRouteLoaderData('root');

	return <SearchByTitle list={blogs} isBlog />;
}

export default SearchBlogsPage;
