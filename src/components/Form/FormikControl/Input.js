import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function Input(props) {
	const { label, name, className, icon, ...rest } = props;
	return (
		<div className={`${className}`}>
			<label htmlFor={name}>{label}</label>
			<div className="flex rounded border-2 bg-white focus-within:border-greenBtn">
				<Field
					id={name}
					name={name}
					className="py-4 px-6 w-full outline-none border-none "
					{...rest}
				/>
				{icon && (
					<div className="mr-4 text-greenBtn flex justify-center items-center cursor-pointer">
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
