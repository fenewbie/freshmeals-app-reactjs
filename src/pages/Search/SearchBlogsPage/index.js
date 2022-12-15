import { useEffect, useState } from 'react';
import { useLocation, useRouteLoaderData } from 'react-router-dom';

import Title from '@components/Title';
import { BlogGrid } from '@components/Blog';

function SearchBlogsPage() {
	const { blogs } = useRouteLoaderData('root');
	const [resultSearch, setResultSearch] = useState([]);
	const location = useLocation();

	useEffect(() => {
		if (location.search) {
			const query = new URLSearchParams(location.search);
			const value = query.get('title');
			const result = blogs.filter((item) => {
				const regular = new RegExp(value, 'i');
				return item.title.search(regular) > -1;
			});
			setResultSearch(result);
		}
	}, [location]);

	return (
		<div className="container mx-auto py-28">
			{resultSearch.length > 0 ? (
				<>
					<Title title={`Search result: ${resultSearch.length} posts`} />
					<BlogGrid blogs={resultSearch} />
				</>
			) : (
				<span className="font-bold text-center block">
					No search result
				</span>
			)}
		</div>
	);
}

export default SearchBlogsPage;
