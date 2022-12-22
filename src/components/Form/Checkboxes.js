import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Checkboxes(props) {
	const { label, name, options, ...rest } = props;
	return (
		<div>
			<label>{label}</label>
			<Field name={name}>
				{(formik) => {
					const { field } = formik;
					return options.map((option) => {
						return (
							<div key={option.key}>
								<input
									type="checkbox"
									id={option.value}
									{...field}
									{...rest}
									value={option.value}
									checked={field.value.includes(option.value)}
								/>
								<label>{option.key}</label>
							</div>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Checkboxes;
