import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function Textarea({ props }) {
	const { label, name, ...rest } = props;
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<Field as="textarea" id={name} name={name} className="" {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}
