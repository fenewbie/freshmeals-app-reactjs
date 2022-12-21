import * as Yup from 'yup';
export function getValidationSchema(values) {
	return Yup.object().shape({
		firstName: Yup.string().required('Please enter Your First Name'),
		lastnName: Yup.string().required('Please enter Your last name'),
		email: Yup.string()
			.email('E-mail is not valid!')
			.required('E-mail is required!'),
		password: Yup.string()
			.min(6, 'Password has to be longer than 6 characters!')
			.required('Password is required!'),
		cPassword: Yup.string()
			.oneOf([values.password], 'Passwords are not the same!')
			.required('Password confirmation is required!'),
		consent: Yup.bool()
			.test(
				'consent',
				'You have to agree with our Terms and Conditions!',
				(value) => value === true
			)
			.required('You have to agree with our Terms and Conditions!'),
	});
}

// 	gender: Yup.string().required('Please select your gender'),
// 	contact: Yup.number().required('Please enter Contact number'),
// 	address: Yup.string().required('Please enter your Address'),
