import Button from '@components/UI/Button';
import Accordion from '@components/UI/Accordion';
import { paymentmethods } from '@utils/constants';
import { ErrorMessage, Field, useField } from 'formik';
import TextError from './FormikControl/TextError';

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
					className="group relative mt-10 flex items-center justify-center w-full h-10  md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900"
					type="submit"
				>
					<span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">
						place order
					</span>
				</Button>
			</div>
		</div>
	);
}
