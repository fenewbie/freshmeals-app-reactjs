import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '@services/firebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Input } from '@components/Form';
import Button from '@components/UI/Button';
import { useFormik } from 'formik';
import { ValidationSchema } from '@components/Form/ValidationSchema';

export default function Register() {
	const navigate = useNavigate();
	const [validation, setValidation] = useState(true);

	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			password1: '',
			password2: '',
			consent: false,
		},
		validationSchema: ValidationSchema,
		onSubmit: async (values) => {
			console.log('Data before submit', values);
			try {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					values.email,
					values.password1
				);
				const username = userCredential.user;

				await setDoc(doc(db, 'users', username.uid), {
					uid: username.uid,
					displayName: `${username.firstName} ${username.lastName}`,
					// email,
				});
				console.log('username', username);
				navigate('/login');
			} catch (err) {
				console.log('err', err);
			}
		},
	});
	const validatePassword = (e) => {
		if (e.target.value === formik.values.password1) {
			setValidation(true);
			formik.handleChange(e);
		} else {
			setValidation(false);
			formik.handleChange(e);
		}
	};
	return (
		<div className="container mx-auto py-28 max-md:px-6">
			<div className="flex items-center justify-center">
				<div className="mt-4">
					<div className="text-center">
						<h2 className="lg:text-[42px]  md:text-3xl text-2xl font-bold lg:leading-[3.5rem]">
							Register <br />
							Your Account
						</h2>

						<p className="mt-3 max-md:text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. <br />
							Sit aliquid, Non distinctio vel iste.
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center my-10 mt-24">
				<div className="lg:w-3/6 md:w-8/12">
					<form onSubmit={formik.handleSubmit}>
						<Input
							type="text"
							{...formik.getFieldProps('firstname')}
							placeholder="First Name"
							className="mb-7"
						/>
						{formik.errors.firstname ? (
							<div className="text-red-500">
								<small>{formik.errors.firstname}</small>
							</div>
						) : null}
						<Input
							type="text"
							{...formik.getFieldProps('lastname')}
							placeholder="Last Name"
							className="mb-7"
						/>
						{formik.errors.lastname ? (
							<div className="text-red-500">
								<small>{formik.errors.lastname}</small>
							</div>
						) : null}
						<Input
							type="text"
							{...formik.getFieldProps('email')}
							placeholder="Email*"
							className="mb-7"
						/>
						{formik.errors.email ? (
							<div className="text-red-500">
								<small>{formik.errors.email}</small>
							</div>
						) : null}
						<Input
							type="password"
							{...formik.getFieldProps('password1')}
							placeholder="Password*"
							className="mb-7"
						/>
						{formik.errors.password1 ? (
							<div className="text-red-500">
								<small>{formik.errors.password1}</small>
							</div>
						) : null}
						<Input
							type="password"
							{...formik.getFieldProps('password2')}
							placeholder="Confirm Password*"
							// onChange={(e) => validatePassword(e)}
						/>
						{/* {!validation ? (
							<div className="text-red-500">
								<small>Password didn't match</small>
							</div>
						) : null} */}
						{formik.errors.password2 ? (
							<div className="text-red-500">
								<small>{formik.errors.password2}</small>
							</div>
						) : null}

						{/* <label className="flex mt-8 text-sm">
							<Input
								type="checkbox"
								{...formik.getFieldProps('consent')}
								className="mr-2 relative top-[1px]"
							/>
							I consent to Herboil processing my personal data in
							order to send personalized marketing material in
							accordance with the consent form and the privacy
							policy.
						</label> */}

						<label className="flex mt-4 text-sm">
							<Input
								{...formik.getFieldProps('consent')}
								type="checkbox"
								value=""
								className="mr-2  relative top-[1px]"
							/>
							By clicking "create account", I consent to the
							privacy policy.
						</label>
						{formik.errors.consent ? (
							<div className="text-red-500">
								<small>{formik.errors.consent}</small>
							</div>
						) : null}
						<div className="mt-7">
							<Button
								className="my-6 w-full"
								type="submit"
								btn="card"
								onClick={() => {
									formik.handleSubmit();
									console.log('submit');
								}}
							>
								CREATE ACCOUNT
							</Button>
						</div>
					</form>
					<div className="flex flex-col items-center mt-7">
						<p className="mb-6 text-sm">
							By creating an account, you agree to our:
						</p>
						<p className="text-lg">
							<Link to="#">
								TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp;
								&nbsp; PRIVACY POLICY
							</Link>
						</p>
						<div className="mt-12 underline">
							<Button
								className="hover:text-greenBtn text-lg"
								onClick={() => navigate('/login')}
							>
								ALREADY HAVE AN ACCOUNT ?
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
