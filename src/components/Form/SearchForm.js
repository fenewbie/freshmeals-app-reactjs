import { BsSearch } from 'react-icons/bs';

import { useRef } from 'react';

function SearchForm({ setSearchKey }) {
	const inputRef = useRef();

	const timer = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const value =
			inputRef.current.value.trim().length > 0
				? inputRef.current.value
				: null;
		setSearchKey({ value: value });
	};

	const handleChange = (e) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = setTimeout(() => {
			const value =
				e.target.value.trim().length > 0 ? e.target.value : null;
			setSearchKey({ value: value });
		}, 200);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex items-center border-2 rounded-md py-4 px-4 focus-within:border-greenBtn">
				<input
					id="search"
					name="search"
					type="text"
					placeholder="Looking for some things..."
					className="border-none outline-none w-full flex-1"
					ref={inputRef}
					onChange={handleChange}
				/>

				<span className="ml-4">
					<BsSearch className="mx-auto" />
				</span>
			</div>
		</form>
	);
}

export default SearchForm;
