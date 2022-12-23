import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import TextError from './TextError';

export default function Input1(props) {
	const { label, name, className, ...rest } = props;
	return (
		<div className={`${className}`}>
			<label htmlFor={name}>{label}</label>
			<FastField
				id={name}
				name={name}
				className="relative flex py-4 px-6 w-full outline-none rounded border-2 bg-white focus-within:border-greenBtn"
				{...rest}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}
