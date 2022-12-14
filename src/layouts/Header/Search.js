import { Input, SearchForm } from '@components/Form';
import Button from '@components/UI/Button';
import { memo, useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import {
	createSearchParams,
	useNavigate,
	useRouteLoaderData,
} from 'react-router-dom';

function SearchProducts() {
	const [toggleSearchForm, setToggleSearchForm] = useState(false);
	const search = useRouteLoaderData('search');
	const searchValue = search ? search.title : null;

	const navigate = useNavigate();
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.value = searchValue;
		
	}, [searchValue]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const key = inputRef.current.name;
		const value = inputRef.current.value;
		const params = { [key]: value };
		value && navigate({
			pathname: '/search',
			search: `?${createSearchParams(params)}`,
		});
	};

	return (
		<div className="relative">
			<Button
				className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4"
				onClick={() => setToggleSearchForm(!toggleSearchForm)}
			>
				{toggleSearchForm ? <RiCloseFill /> : <BiSearch />}
			</Button>
			<div
				className={`absolute top-[130%] right-0 p-4 bg-white ${
					toggleSearchForm ? 'visible' : 'invisible'
				}`}
			>
				<form
					role="search"
					onSubmit={handleSubmit}
				>
					<input
						className="py-2 px-5 border-2 border-greenBtn outline-none rounded"
						type="search"
						name="product-title"
						placeholder="Searching for the products..."
						ref={inputRef}
					/>
				</form>
			</div>
		</div>
	);
}

export default memo(SearchProducts);
