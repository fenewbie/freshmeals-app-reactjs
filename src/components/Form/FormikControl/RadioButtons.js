import { ErrorMessage, Field } from 'formik';
import { Fragment } from 'react';
import TextError from './TextError';

export default function RadioButtons({ label, name, options, ...rest }) {
	return (
		<div>
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<Fragment key={option.key}>
								<input
									type="radio"
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={option.value}>{option.key}</label>
							</Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}
