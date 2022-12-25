import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Select(props) {
	const { label, name, options, className } = props;
	return (
		<div className={`form-control ${className}`}>
			<label htmlFor={name}>{label}</label>
			<Field
				as="select"
				id={name}
				name={name}
				className="py-4 px-4 w-full border-2 rounded-md outline-none focus:border-greenBtn"
			>
				{options.map((option) => {
					return (
						<option
							key={option.value}
							value={option.value}
							className="py-3 capitalize"
						>
							{option.key}
						</option>
					);
				})}
			</Field>
			<ErrorMessage
				component={TextError}
				name={name}
			/>
		</div>
	);
}

export default Select;
