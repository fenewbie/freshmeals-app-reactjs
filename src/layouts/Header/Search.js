import { memo, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { RiCloseFill } from 'react-icons/ri';

import { SearchForm } from '@components/Form';
import Button from '@components/UI/Button';

function SearchProducts() {
	const [toggleSearchForm, setToggleSearchForm] = useState(false);

	return (
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
					<SearchForm type="products" searchFor="title" />
				</div>
			)}
		</div>
	);
}

export default memo(SearchProducts);
