import { ErrorMessage, Field, useField } from 'formik';

import Button from '@components/UI/Button';
import Accordion from '@components/UI/Accordion';
import TextError from './FormikControl/TextError';
import { paymentmethods } from '@utils/constants';

export default function PaymentMethod() {
	const [field] = useField('paymentmethod');
	return (
		<div className="w-full">
			<Accordion opened={field.value}>
				{paymentmethods.map((option, index) => (
					<Accordion.Item
						key={option.id}
						id={option.value}
						className={`p-4 border-x border-b ${
							index === 0 && 'border-t'
						}`}
					>
						<Accordion.Title>
							<label
								htmlFor={option.value}
								className="flex items-center cursor-pointer"
							>
								<Field
									id={option.value}
									type="radio"
									name="paymentmethod"
									value={option.value}
								/>

								<span className="ml-2">{option.key}</span>
								{option.img && (
									<img
										src={option.img}
										alt={option.key}
										className="h-10 relative -top-1 ml-2"
									/>
								)}
							</label>
						</Accordion.Title>
						<Accordion.Content>
							<p className="text-sm px-6 py-2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] mt-4 mx-2 mb-2 bg-white">
								{option.note}
							</p>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion>

			<ErrorMessage
				name="paymentmethod"
				component={TextError}
			/>

			<div>
				<p className="text-sm mt-8">
					Your personal data will be used to process your order,
					support your experience throughout this website, and for
					other purposes described in our privacy policy.
				</p>
				<Button
					className="btn-animated mt-10 max-md:w-full max-md:py-2 " 
					type="submit"
				>
					<span className="btn-animated-text max-md:text-sm">place order</span>
				</Button>
			</div>
		</div>
	);
}
