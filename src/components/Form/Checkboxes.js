import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Checkboxes(props) {
	const { label, name, options, className, ...rest } = props;
	return (
		<div className={`${className}`}>
			<label>{label}</label>
			<Field name={name}>
				{(formik) => {
					const { field } = formik;
					return options.map((option) => {
						return (
							<div
								key={option.key}
								className="mb-3"
							>
								<input
									type="checkbox"
									id={option.value}
									{...field}
									{...rest}
									value={option.value}
									checked={field.value.includes(option.value)}
								/>
								<label className="ml-2 max-md:text-sm">
									{option.key}
								</label>
							</div>
						);
					});
				}}
			</Field>
			<ErrorMessage
				name={name}
				component={TextError}
			/>
		</div>
	);
}

export default Checkboxes;
