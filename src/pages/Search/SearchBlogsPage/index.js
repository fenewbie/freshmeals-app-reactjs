import { useEffect, useState } from 'react';
import { useLocation, useRouteLoaderData } from 'react-router-dom';

import { BlogCard } from '@components/Blog';
import Title from '@components/Title';
import Grid from '@components/UI/Grid';

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
			{resultSearch.length > 0 && (
				<>
					<Title title="Search result:" />
					<Grid>
						{resultSearch.map((item) => (
							<BlogCard
								key={item.id}
								id={item.id}
								title={item.title}
								description={item.description}
								tags={item.tags}
								image={item.image}
							/>
						))}
					</Grid>
				</>
			)}
		</div>
	);
}

export default SearchBlogsPage;
