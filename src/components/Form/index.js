import Input from './Input';
import { FaUser, FaPhone } from 'react-icons/fa';
import { MdEmail, MdOutlineEditNote } from 'react-icons/md';
import { RiEditFill } from 'react-icons/ri';
function Form({
	subscribe = false,
	login = false,
	register = false,
	contact = false,
}) {
	return (
		<div>
			<form className="grid grid-cols-2 gap-4">
				<Input
					type="text"
					name="name"
					placeholder="Enter your name"
					messageError="Please enter your name"
					icon={<FaUser />}
				/>
				<Input
					type="text"
					name="email"
					placeholder="Enter your email"
					messageError="Please enter your email"
					icon={<MdEmail />}
				/>
				<Input
					type="password"
					name="password"
					placeholder="Enter your password"
					messageError="Please enter your password"
				/>
				<Input
					type="number"
					name="number"
					placeholder="Enter your number"
					messageError="Please enter your number"
				/>
				<Input
					type="textarea"
					name="message"
					placeholder="Enter your message"
					messageError="Please enter your message"
					rows={7}
					icon={<RiEditFill />}
				/>
			</form>
		</div>
	);
}

export default Form;
