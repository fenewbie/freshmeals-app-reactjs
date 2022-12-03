import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import Input from './Input';
import { FiSend } from 'react-icons/fi';

function SubscribeForm({ isFooter }) {
	const [formValue, setFormValue] = useState({ email: '' });
	const [errors, setErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormValue({ [name]: value });
	};

	const validate = (formValues) => {
		const errors = {};

		if (formValues.email === '') {
			errors.email = 'Please enter your email.';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
		) {
			errors.email = 'Please provide a valid email.';
		}
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(formValue));
		setIsSubmit(true);
	};

	const cleanForm = () => {
		setFormValue({ email: '' });
	};

	const handleOnKeyDown = () => {
		setErrors({});
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmit) {
			console.log(formValue);
			cleanForm();
		} else if (!Object.keys(errors).length === 0 && isSubmit) {
			console.log(errors);
		}
		setIsSubmit(false);
	}, [errors]);

	return (
		<div>
			<form
				className="flex max-md:flex-wrap"
				onSubmit={handleSubmit}
				noValidate
			>
				<div className="flex-1">
					<Input
						type="email"
						name="email"
						placeholder="Enter your email"
						messageError={errors.email}
						value={formValue.email}
						onChange={handleFormChange}
						onKeyDown={handleOnKeyDown}
					/>
				</div>
				{isFooter ? (
					<Button
						btn='card'
					>
						<FiSend />
					</Button>
				) : (
					<Button btn='card' className='md:ml-3 min-w-[140px]'>
						Subscribe
					</Button>
				)}
			</form>
		</div>
	);
}

export default SubscribeForm;
