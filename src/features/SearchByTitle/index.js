import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Title from '@components/Title';
import { BlogGrid } from '@components/Blog';
import ProductGrid from '@features/ProductScreen/ProductGrid';
import * as cs from '@utils/constants';

function SearchByTitle({ list, isBlog, isProduct }) {
	const [resultSearch, setResultSearch] = useState([]);
	
	const location = useLocation();

	useEffect(() => {
		if (location.search) {
			const query = new URLSearchParams(location.search);
			const value = query.get('title');
			const result = list.filter((item) => {
				const regular = new RegExp(value, 'i');
				return item.title.search(regular) > -1;
			});
			setResultSearch(result);
		}
	}, [location, list]);

	return (
		<div>
			{resultSearch.length > 0 ? (
				<>
					<Title title={`Search result: ${resultSearch.length} posts`} />
					{isBlog && <BlogGrid blogs={resultSearch} />}
					{isProduct && <ProductGrid products={resultSearch} />}
				</>
			) : (
				<>
					<div className="flex justify-center items-center  mb-14">
						<span className="text-center text-3xl">No search result</span>
						<img
							src={cs.noResult}
							alt="no-result"
							className="h-16 object-contain ml-2"
						/>
					</div>

					<Title
						title={(isBlog && 'All Blogs') || (isProduct && 'All Products')}
						center={false}
					/>
					{isBlog && <BlogGrid blogs={list} />}
					{isProduct && <ProductGrid products={list} />}
				</>
			)}
		</div>
	);
}

export default SearchByTitle;
