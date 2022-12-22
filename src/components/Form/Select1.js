import {Field, useField } from 'formik';

export default function Select1({ label, name, options, ...props }) {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Field
				as="select"
				id={name}
				name={name}
				className="py-4 px-4 w-full border rounded-md outline-none focus:border-greenBtn"
				{...field}
			>
				{options?.map((option) => {
					return (
						<option key={option.value} value={option.value} className="py-3">
							{option.value}
						</option>
					);
				})}
			</Field>
			{meta.touched && meta.error ? (
				<div className="text-red-500">{meta.error}</div>
			) : null}
		</>
	);
}
