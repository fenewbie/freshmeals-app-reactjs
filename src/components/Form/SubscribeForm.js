import { useFormik } from 'formik';
import Input from './Input';
import { FiSend } from 'react-icons/fi';
import { TiWarning } from 'react-icons/ti';


import Button from '../UI/Button';
import { validateEmail as validate } from './ValidateForm';

function SubscribeForm({ isFooter }) {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div>
			<form
				className="flex max-md:flex-wrap"
				onSubmit={formik.handleSubmit}
				noValidate
			>
				<div className="flex-1">
					<Input
						name="email"
						type="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.firstName}
						hasError={formik.errors.email}
					/>
					{formik.errors.email ? (
						<p className="my-2 text-red-400 flex items-center justify-center">
							<TiWarning className="mr-1" /> {formik.errors.email}
						</p>
					) : null}
				</div>
				{isFooter ? (
					<Button
						type="submit"
						btn="card"
					>
						<FiSend />
					</Button>
				) : (
					<Button
						btn="card"
						type="submit"
						className="md:ml-3 min-w-[140px]"
					>
						Subscribe
					</Button>
				)}
			</form>
		</div>
	);
}

export default SubscribeForm;