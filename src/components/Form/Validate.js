export const validateEmail = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Please enter your email';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}

	return errors;
};



