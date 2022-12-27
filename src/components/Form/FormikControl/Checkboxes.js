import { Field, ErrorMessage } from 'formik';
import { Fragment } from 'react';
import TextError from './TextError';

function Checkboxes({ label, name, options, className, ...rest }) {
	return (
		<div className={`${className}`}>
			<label>{label}</label>
			<Field name={name}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<Fragment key={option.key}>
								<input
									type="checkbox"
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value.includes(option.value)}
									className="my-3"
								/>
								<label
									htmlFor={option.value}
									className="ml-2 max-md:text-sm capitalize"
								>
									{option.key}
								</label>
								<br />
							</Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Checkboxes;
