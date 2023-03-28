import { Form, Formik} from 'formik';
import { FiSend } from 'react-icons/fi';
import Button from '../UI/Button';
import { SubscribeSchema } from './ValidationSchema';
import FormikControl from './FormikControl';

function SubscribeForm({ isFooter }) {
	const handleSubmit = (values) => {
		console.log(values.email);
		alert('Thank you for your subscription!')
	};

	return (
		<div className="text-black">
			<Formik
				initialValues={{ email: '' }}
				validationSchema={SubscribeSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div className="flex max-md:flex-wrap">
						<FormikControl
							control="input"
							name="email"
							placeholder="Enter your email"
							className="w-full"
						/>
						<Button
							type="submit"
							btn="card"
							className={`rounded-sm border-2 border-greenBtn ${
								isFooter ? '' : 'md:min-w-[150px]  md:ml-4'
							}`}
						>
							{isFooter ? <FiSend /> : 'Subscribe'}
						</Button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default SubscribeForm;
