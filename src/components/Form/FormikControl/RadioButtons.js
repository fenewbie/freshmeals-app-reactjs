import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

export default function RadioButtons({ label, name, options, ...rest }) {
	return (
		<div>
			<label>{label}</label>
			<Field
				name={name}
				{...rest}
			>
				{({ field }) => {
					return options.map((option) => {
						return (
							<div
								key={option.key}
								className="mb-2"
							>
								<input
									type="radio"
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label
									htmlFor={option.value}
									className="ml-2 capitalize"
								>
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
