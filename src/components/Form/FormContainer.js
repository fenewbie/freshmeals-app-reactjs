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
	const checkboxOptions = [
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
		checkboxOption:[]
	};
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('E-mail is not valid!')
			.required('E-mail is required!'),
		desc: Yup.string().required,
		selectOption: Yup.string().required('Required'),
		radioOption: Yup.string().required('Required'),
		checkboxOption: Yup.string().required('Required'),
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
					<FormikControl
						control="textarea"
						label="description"
						name="description"
					/>
					<FormikControl
						control="select"
						name="selectOption"
						defaultValue="Select a country"
						options={dropdownOptions}
					/>
					<FormikControl
						control="radio"
						label="Radio Topic"
						name="radioOption"
						options={radioOptions}
					/>
					<FormikControl
						control="checkbox"
						label="Checkbox topics"
						name="checkboxOption"
						options={checkboxOptions}
					/>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
}
