import * as Yup from 'yup';
export function ValidationSchema() {
	return Yup.object().shape({
		email: Yup.string()
			.email('E-mail is not valid!')
			.required('E-mail is required!'),
		password1: Yup.string()
			.required('Password is required!')
			.min(6, 'Password has to be longer than 6 characters!')
			.max(15, 'Should not be more than 15 characters'),
		password2: Yup.string()
			.required('Password confirmation is required!')
			.oneOf([Yup.ref('password1')], 'Passwords are not the same!'),
		consent1: Yup.bool()
			.test(
				'consent',
				'You have to agree with our Terms and Conditions!',
				(value) => value === true
			)
			.required('You have to agree with our Terms and Conditions!'),
		consent2: Yup.bool()
			.oneOf([true], 'You have to agree with our Terms and Conditions!')
			.required('Required!'),
	});
}
