import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import TextError from './TextError';

export default function Input1(props) {
	const { label, name, ...rest } = props;
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<FastField
				id={name}
				name={name}
				className="flex-1 border-none h-full outline-none  px-4 text-black"
				{...rest}
			/>
			<ErrorMessage name={name} component={TextError}/>
		</div>
	);
}
