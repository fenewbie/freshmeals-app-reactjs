import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function Input(props) {
	const { label, name, className,icon, ...rest } = props;
	return (
		<div className={`${className}`}>
			<label htmlFor={name}>{label}</label>
			<Field
				id={name}
				name={name}
				className="relative flex py-4 px-6 w-full outline-none rounded border-2 bg-white focus-within:border-greenBtn"
				{...rest}
			/>
			{icon && <span className="mr-4 text-greenBtn">{icon}</span>}
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}
