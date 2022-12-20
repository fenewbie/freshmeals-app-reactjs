import { BsSearch } from 'react-icons/bs';

import Button from '@components/UI/Button';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function SearchForm({ type, searchFor, isMobi}) {
	const navigate = useNavigate();
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const key = inputRef.current.name;
		const value = inputRef.current.value;
		value &&
			navigate({
				pathname: `/search/${type}`,
				search: `?${createSearchParams({ [key]: value })}`,
			});
	};

	return (
		<form
			className={`flex max-md:flex-wrap`}
			onSubmit={handleSubmit}
			role="search"
		>
			<div
				className={`flex-1 border-2 border-greenBtn max-md:rounded-md max-md:overflow-hidden max-md:mt-6  ${
					isMobi && 'flex'
				}`}
			>
				<input
					className="h-full w-full py-4 px-5 border-none outline-none"
					type="search"
					name={searchFor}
					placeholder="Looking for the name..."
					ref={inputRef}
				/>
				{isMobi && (
					<button className="pr-3">
						<BsSearch className="mx-auto" />
					</button>
				)}
			</div>
			{!isMobi && (
				<Button
					btn="card"
					className="rounded-none"
				>
					<BsSearch className="mx-auto" />
				</Button>
			)}
		</form>
	);
}

export default SearchForm;
