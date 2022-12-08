import Input from '../../../components/Form/Input';
import { TbEdit } from 'react-icons/tb';
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Button from '../../../components/UI/Button';

function FormSection() {
	return (
		<div>
			<h3 className="font-bold text-2xl mb-10">Comments</h3>
			<form className="bg-[#F0F4F7] p-12">
				<Input
					type="textarea"
					rows={6}
					className="border"
					icon={<TbEdit className="text-2xl" />}
				/>
				<Input
					type="text"
					placeholder="Type your name"
					className="mt-8 border"
					icon={<FaUserAlt />}
				/>
				<Input
					type="email"
					placeholder="Type your email"
					className="mt-8 border"
					icon={<IoMdMail />}
				/>
				<Input
					type="text"
					placeholder="Type your website"
					className="mt-8 border"
					icon={<AiOutlineGlobal />}
				/>
				<div className="flex items-center mt-8 mb-8">
					<Input type="checkbox" />
					<label className="ml-2 text-sm">
						Save my name, email, and website in this browser for the
						next time I comment.
					</label>
				</div>

				<Button
					btn="card"
					className="flex items-center"
				>
					<FiMessageCircle className="mr-2" />
					Post Comment
				</Button>
			</form>
		</div>
	);
}

export default FormSection;
