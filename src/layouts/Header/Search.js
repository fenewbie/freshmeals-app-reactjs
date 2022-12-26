import { memo, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { RiCloseFill } from 'react-icons/ri';

import { SearchForm } from '@components/Form';
import Button from '@components/UI/Button';
import { createSearchParams, useNavigate } from 'react-router-dom';

function SearchProducts({ isMobi }) {
	const [toggleSearchForm, setToggleSearchForm] = useState(false);
	const navigate = useNavigate();

	const handleSearch = (data) => {
		navigate({
			pathname: `/shop/search`,
			search: `?${createSearchParams({ title: data.value })}`,
		});
	};

	return isMobi ? (
		<div className="mt-5">
			<SearchForm setSearchKey={handleSearch} />
		</div>
	) : (
		<div className="relative">
			<Button
				className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4"
				onClick={() => setToggleSearchForm(!toggleSearchForm)}
			>
				{toggleSearchForm ? <RiCloseFill /> : <BiSearch />}
			</Button>
			{toggleSearchForm && (
				<div
					className={`absolute top-[130%] right-0 p-4 bg-white lg:min-w-[350px]`}
				>
					<SearchForm setSearchKey={handleSearch} />
				</div>
			)}
		</div>
	);
}

export default memo(SearchProducts);
