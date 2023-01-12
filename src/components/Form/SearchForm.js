import { useRef } from 'react';
import { Form, Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';

import FormikControl from './FormikControl';

function SearchForm({ setSearchKey }) {
	const timer = useRef();

	const handleSubmit = (values) => {
		let value = values.search.trim();
		value = value.length > 0 ? value : null;
		setSearchKey({ value: value });
	};

	const handleChangeCustom = (e) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = setTimeout(() => {
			let value = e.target.value.trim();
			value = value.length > 0 ? value : null;
			setSearchKey({ value: value });
		}, 100);
	};

	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={handleSubmit}
		>
			{({ handleChange }) => (
				<Form>
					<FormikControl
						control="input"
						name="search"
						placeholder="Enter your search key..."
						onChange={(e) => {
							handleChangeCustom(e);
							handleChange(e);
						}}
						icon={<BsSearch />}
					/>
				</Form>
			)}
		</Formik>
	);
}

export default SearchForm;
