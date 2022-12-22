import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

export default function FormContainer() {
	const dropdownOptions = [
		{ key: 'Select an option', value: '' },
		{ key: 'Australia', value: 'Australia' },
		{ key: 'France', value: 'France' },
		{ key: 'England', value: 'England' },
		{ key: 'Costa Rica', value: 'Costa Rica' },
	];
	const radioOptions = [
		{ key: 'Australia', value: 'Australia' },
		{ key: 'France', value: 'France' },
		{ key: 'England', value: 'England' },
		{ key: 'Costa Rica', value: 'Costa Rica' },
	];
	const initialValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOption: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('E-mail is not valid!')
			.required('E-mail is required!'),
		desc: Yup.string().required,
		selectOption: Yup.string().required('Required'),
		radioOption: Yup.string().required('Required'),
	});
	const onSubmit = (values) => console.log('Form data', values);
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					<FormikControl
						control="input"
						type="email"
						label="Email"
						name="email"
					/>
					{/* <FormikControl control="textarea" label="description" name="description" /> */}
					{/* <FormikControl
						control="select"
						label="Select a country"
						name="selectOption"
						options={dropdownOptions}
					/>
					<FormikControl
						control="radio"
						label="Radio Topic"
						name="radioOption"
						options={radioOptions}
					/> */}
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
}
