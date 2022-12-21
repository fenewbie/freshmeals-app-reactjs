import Input from './Input';
import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

export default function CheckoutForm() {
	 
	return (
		<div className="border rounded px-8 py-8">
			<h5 className="font-bold text-sm mb-4">Personal information</h5>
			<div className="flex flex-wrap justify-between">
				<Input
					type="text"
					name="name"
					placeholder="First name"
					className="mb-8 border md:w-[49%]"
					icon={<FaUserAlt />}
				/>
				<Input
					type="text"
					name="lastName"
					placeholder="Last name"
					className="mb-8 border md:w-[49%]"
					icon={<FaUserAlt />}
				/>
				<Input
					type="email"
					name="email"
					placeholder="Your email"
					className="mb-8 border md:w-[49%]"
					icon={<GrMail />}
				/>
				<Input
					type="number"
					name="phone"
					placeholder="Your phone"
					className="mb-8 border md:w-[49%]"
					icon={<AiFillPhone />}
				/>
			</div>
			<div className="mt-2">
				<h5 className="font-bold text-sm mb-4">
					Order Notes (optional)
				</h5>
				<Input
					type="textarea"
					name="notes"
					rows={6}
					className="border w-full"
					placeholder="Notes about your order, e.g. special notes for delivery"
				/>
			</div>
		</div>
	);
}
