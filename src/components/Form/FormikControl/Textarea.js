import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function Textarea({ label, name, ...rest }) {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<Field as="textarea" id={name} name={name} className="border" {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}
