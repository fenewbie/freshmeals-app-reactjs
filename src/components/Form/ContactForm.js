import { Formik, Form } from 'formik';
import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

import Button from '@components/UI/Button';
import FormikControl from './FormikControl';
import { ContactSchema } from './ValidationSchema';
import { saveinfocomment, servicetype } from '@utils/constants';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
	const navigate = useNavigate();
	const onSubmit = (values) => {
		console.log('Form data', values);
		alert('Thank you for your contact! We will come back to you soon!');
		navigate('/');
	};
	const initialValues = {
		email: '',
		name: '',
		phone: '',
		selectOption: '',
		message: '',
		saveinfo: [],
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ContactSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div className="flex gap-8 max-md:flex-wrap">
					<FormikControl
						control="input"
						name="name"
						placeholder="Enter your name"
						className="md:w-1/2 w-full"
						icon={<FaUserAlt />}
					/>
					<FormikControl
						control="input"
						name="email"
						placeholder="Enter your email"
						className="md:w-1/2 w-full"
						icon={<GrMail />}
					/>
				</div>
				<div className="flex gap-8 max-md:flex-wrap mt-8">
					<FormikControl
						control="select"
						name="selectOption"
						options={servicetype}
						className="md:w-1/2 w-full"
					/>
					<FormikControl
						control="input"
						name="phone"
						placeholder="Enter phone number"
						className="md:w-1/2 w-full"
						icon={<AiFillPhone />}
					/>
				</div>

				<FormikControl
					control="textarea"
					name="message"
					placeholder="Enter message"
					className="my-8"
					rows={6}
				/>

				<FormikControl
					control="checkbox"
					name="saveinfo"
					options={saveinfocomment}
					className="my-5"
				/>
				<Button
					type="submit"
					className="btn-animated md:min-w-[200px] max-md:w-full"
				>
					<span className="btn-animated-text">GET AN FREE SERVICE</span>
				</Button>
			</Form>
		</Formik>
	);
}
