import * as Yup from 'yup';

const email = {
	email: Yup.string()
		.email('E-mail is not valid!')
		.required('E-mail is required!'),
};

const password = {
	password: Yup.string()
		.min(6, 'Password has to be longer than 6 characters!')
		.max(15, 'Should not be more than 15 characters')
		.required('Password is required!'),
};

const fullname = {
	firstname: Yup.string().required('Please enter your first Name'),
	lastname: Yup.string().required('Please enter your last name'),
};

const name = {
	name: Yup.string().required('Please enter your name'),
};

const selectOption = {
	selectOption: Yup.string().required('Choose a select'),
};

const phone = {
	phone: Yup.string()
		.required('Phone is required!')
		.matches(
			/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
			'Phone is not valid!'
		),
};

export function LoginSchema(values) {
	return Yup.object().shape({
		...email,
		...password,
	});
}

export function CheckoutSchema(values) {
	return Yup.object().shape({
		...email,
		...fullname,
		...phone,
		...selectOption,
		address1: Yup.string().required('Address is required!'),
		city: Yup.string().required('City is required!'),
		state: Yup.string().required('State is required!'),
		zip: Yup.string().required('Zip code is required!'),
		paymentmethod: Yup.string().required('Payment method is required!'),
	});
}

export function RegisterSchema(values) {
	return Yup.object().shape({
		...email,
		...fullname,
		...password,
		passwordConfirm: Yup.string()
			.required('Password confirmation is required!')
			.oneOf([Yup.ref('password')], 'Passwords are not the same!'),
		consent: Yup.array()
			.min(2, 'You have to agree with our Terms and Conditions!')
			.of(Yup.string())
			.required('You have to agree with our Terms and Conditions!'),
	});
}

export function CommentSchema(values) {
	return Yup.object().shape({
		...email,
		...name,
		comment: Yup.string()
			.min(10, 'Comment has to be longer than 10 characters!')
			.max(200, 'Should not be more than 300 characters')
			.required('Comment is required!'),
	});
}

export function SubscribeSchema(values) {
	return Yup.object().shape({
		...email,
	});
}

export function ContactSchema(values) {
	return Yup.object().shape({
		...email,
		phone: Yup.string().matches(
			/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
			'Phone is not valid!'
		),
	});
}

