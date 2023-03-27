import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@services/firebase';
import { Form, Formik } from 'formik';

import FormikControl from '@components/Form/FormikControl';
import { LoginSchema } from '@components/Form/ValidationSchema';
import Button from '@components/UI/Button';
import Loader from '@components/UI/Loader';

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const initialValues = { email: '', password: '' };

	const handleSubmit = async (values, { setSubmitting }) => {
		setSubmitting(true);
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);
			const username = userCredential.user;
			setSubmitting(false);
			navigate('/user-profile');
			return username;
		} catch (err) {
			setError('Either Email or Password is incorrect');
		}
	};
	return (
		<div className="container my-28">
			<div className="grid grid-flow-row">
				<div className="lg:grid-cols-12">
					<div className="text-center">
						<h2 className="lg:text-[42px]  md:text-3xl text-2xl font-bold lg:leading-[3.5rem]">
							Sign In <br />
							To Your Account
						</h2>
						<p className="mt-3 max-md:text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. <br />
							Sit aliquid, Non distinctio vel iste.
						</p>
					</div>
				</div>
			</div>
			<div className="grid lg:grid-cols-12 grid-cols-1 gap-8 mt-20  ">
				<div className="lg:col-span-5 ">
					<Formik
						initialValues={initialValues}
						validationSchema={LoginSchema}
						onSubmit={handleSubmit}
					>
						{({ isSubmitting }) => (
							<Form>
								{isSubmitting && <Loader type="section" />}
								{error && (
									<label className="text-red-500 px-4 py-2 rounded mb-4 block">
										{error}
									</label>
								)}
								<FormikControl
									control="input"
									type="email"
									name="email"
									placeholder="Email*"
									className="mb-7"
								/>
								<FormikControl
									control="input"
									type="password"
									name="password"
									placeholder="Password*"
								/>
								<div className="mt-7">
									<Button
										className="w-full max-md:h-[47px] max-md:text-sm"
										btn="card"
										type="submit"
									>
										SIGN IN
									</Button>
								</div>
								<div className="go-to-btn mt-6">
									<Link
										to="#"
										className="text-lg font-light hover:text-greenBtn"
									>
										<small className="max-md:text-center max-md:block">
											FORGOTTEN YOUR PASSWORD?
										</small>
									</Link>
								</div>
							</Form>
						)}
					</Formik>
				</div>
				<div className="lg:col-span-7 ">
					<div className=" text-center pt-50">
						<h4 className="font-bold mb-5">
							DON'T HAVE AN ACCOUNT?
						</h4>
						<p className="max-md:text-sm max-md:mb-6">
							Add items to your wishlistget personalised
							recommendations
							<br />
							check out more quickly track your orders register
						</p>
						<Button
							btn="card"
							className="min-w-[210px] max-w-[200px] mt-8 m-auto max-md:h-[47px] max-md:text-sm"
							onClick={() => navigate('/register')}
						>
							CREATE ACCOUNT
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
