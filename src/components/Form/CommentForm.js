import { TbEdit } from 'react-icons/tb';
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Form, Formik } from 'formik';

import Button from '@components/UI/Button';
import FormikControl from './FormikControl';
import { CommentSchema } from './ValidationSchema';
import { saveinfocomment } from '@utils/constants';

function FormSection({ handleSubmit }) {
	const initialValues = {
		comment: '',
		name: '',
		email: '',
		website: '',
		saveinfo: [],
	};

	return (
		<div className='bg-[#F0F4F7] py-[50px] md:px-10 px-4'>
			<h3 className="font-bold text-2xl mb-10">Comments</h3>
			<Formik
				initialValues={initialValues}
				validationSchema={CommentSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<FormikControl
						control="textarea"
						name="comment"
						placeholder="Type your comment..."
						rows={6}
						icon={<TbEdit />}
					/>
					<FormikControl
						control="input"
						name="name"
						placeholder="Type your name"
						className="mt-8"
						icon={<FaUserAlt />}
					/>
					<FormikControl
						control="input"
						name="email"
						placeholder="Type your email"
						className="mt-8"
						icon={<IoMdMail />}
					/>

					<FormikControl
						control="input"
						name="website"
						placeholder="Type your website"
						className="mt-8"
						icon={<AiOutlineGlobal />}
					/>

					<FormikControl
						control="checkbox"
						name="saveinfo"
						options={saveinfocomment}
						className="my-5"
					/>

					<Button btn="card" className="flex items-center" type="submit">
						<FiMessageCircle className="mr-2" />
						Post Comment
					</Button>
				</Form>
			</Formik>
		</div>
	);
}

export default FormSection;
