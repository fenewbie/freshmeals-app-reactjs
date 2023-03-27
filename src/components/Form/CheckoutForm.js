import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FiEdit2 } from 'react-icons/fi';
import { AiFillPhone } from 'react-icons/ai';

import FormikControl from './FormikControl';
import { countryOption, createaccount } from '@utils/constants';

export default function CheckoutForm() {

	return (
		<div className="border rounded md:px-8 px-6 py-8">
			<h5 className="font-bold text-sm mb-4">Personal information</h5>
			<div className="flex gap-8 mb-8 max-md:flex-wrap">
				<FormikControl
					control="input"
					name="firstname"
					placeholder="First Name"
					className="md:w-1/2 w-full"
					icon={<FaUserAlt />}
				/>
				<FormikControl
					control="input"
					name="lastname"
					placeholder="Last Name"
					className="md:w-1/2 w-full"
					icon={<FaUserAlt />}
				/>
			</div>
			<div className="flex gap-8 mb-8 max-md:flex-wrap">
				<FormikControl
					control="input"
					name="email"
					placeholder="Email*"
					className="md:w-1/2 w-full"
					icon={<GrMail />}
				/>
				<FormikControl
					control="input"
					name="phone"
					placeholder="Your phone"
					className="md:w-1/2 w-full"
					icon={<AiFillPhone />}
				/>
			</div>
			<div className="mt-10 md:w-1/3 w-full">
				<h5 className="font-bold text-sm mb-4">Country</h5>
				<FormikControl
					control="select"
					name="selectOption"
					defaultValue="Select a country"
					options={countryOption}
				/>
			</div>
			<div className="mt-10">
				<h5 className="font-bold text-sm mb-4">Address</h5>
				<div className="">
					<div className="flex gap-8 max-md:flex-wrap ">
						<FormikControl
							control="input"
							name="address1"
							placeholder="House number and street name"
							className="md:w-1/2 w-full"
						/>
						<FormikControl
							control="input"
							name="address2"
							placeholder="Apartment, suite, unit etc.(optional)"
							className="md:w-1/2 w-full"
						/>
					</div>
				</div>
			</div>
			<div className="mt-10 flex gap-8 max-lg:flex-wrap">
				<div className="lg:w-1/3 md:flex-1 w-full">
					<h5 className="font-bold text-sm mb-4">Town/City</h5>
					<FormikControl control="input" name="city" placeholder="City" />
				</div>
				<div className="lg:w-1/3 md:flex-1 w-full">
					<h5 className="font-bold text-sm mb-4">State</h5>
					<FormikControl control="input" name="state" placeholder="State" />
				</div>
				<div className="lg:w-1/3 w-full">
					<h5 className="font-bold text-sm mb-4">Zip</h5>
					<FormikControl control="input" name="zip" placeholder="Zip" />
				</div>
			</div>
			<div className="mt-5">
				<FormikControl
					control="checkbox"
					name="createaccount"
					options={createaccount}
					className="mr-2"
				/>
			</div>

			<div className="mt-10">
				<h5 className="font-bold text-sm mb-4">Order Notes (optional)</h5>
				<FormikControl
					control="textarea"
					name="notes"
					rows={6}
					placeholder="Notes about your order, e.g. special notes for delivery"
					icon={<FiEdit2 />}
				/>
			</div>
		</div>
	);
}
