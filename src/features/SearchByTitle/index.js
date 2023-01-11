import { useEffect, useState } from 'react';
import { useLocation, useNavigation } from 'react-router-dom';

import Title from '@components/Title';
import { BlogGrid } from '@components/Blog';
import ProductGrid from '@features/ProductScreen/ProductGrid';
import * as cs from '@utils/constants';
import Loader from '@components/UI/Loader';

function SearchByTitle({ list, isBlog, isProduct }) {
	const [resultSearch, setResultSearch] = useState([]);

	const navigation = useNavigation();
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
		<>
			{navigation.state === 'loading' ? (
				<Loader type='section' />
			) : (
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
								<span className="text-center text-xl">No search result</span>
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
			)}
		</>
	);
}

export default SearchByTitle;
