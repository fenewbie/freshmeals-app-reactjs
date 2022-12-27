import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function Textarea({ label, name, icon,className, ...rest }) {
	return (
		<div className={`${className}`}>
			<label htmlFor={name}>{label}</label>

			<div className="flex rounded border-2 bg-white focus-within:border-greenBtn">
				<Field
					as="textarea"
					id={name}
					name={name}
					className="w-full py-4 px-6 outline-none"
					{...rest}
				/>
				{icon && (
					<div className="mr-4 text-greenBtn mt-4 text-xl">
						{icon}
					</div>
				)}
			</div>
			<ErrorMessage
				name={name}
				component={TextError}
			/>
		</div>
	);
}
