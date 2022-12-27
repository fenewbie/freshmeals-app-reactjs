import Button from '@components/UI/Button';
import { saveinfocomment, servicetype } from '@utils/constants';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import { ContactSchema } from './ValidationSchema';

import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

export default function ContactForm() {
	const onSubmit = (values) => console.log('Form data', values);
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
					btn="card"
					className="group relative mt-10 flex items-center justify-center w-full h-10  md:w-1/6 lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900"
				>
					<span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">
						GET AN FREE SERVICE
					</span>
				</Button>
			</Form>
		</Formik>
	);
}
