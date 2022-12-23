import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '@services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Button from '@components/UI/Button';
import { Formik } from 'formik';
import { ValidationSchema } from '@components/Form/ValidationSchema';
import Input1 from '@components/Form/Input1';
import Checkboxes from '@components/Form/Checkboxes';

export default function Register() {
	const navigate = useNavigate();
	const initialValues = {
		firstname: '',
		lastname: '',
		email: '',
		password1: '',
		password2: '',
		consent: [],
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const userCredential = await createUserWithEmailAndPassword(
						auth,
						values.email,
						values.password1
					);
					const username = userCredential.user;

					setDoc(doc(db, 'users', username.uid), {
						uid: username.uid,
						displayName: `${values.firstname} ${values.lastname}`,
						email: username.email,
					});
					setSubmitting(false);
					navigate('/login');
				} catch (err) {
					const errorCode = err.code;
					if (errorCode === 'auth/email-already-in-use') {
						alert('The email address is already in use');
					} else if (errorCode === 'auth/invalid-email') {
						alert('The email address is not valid.');
					} else if (errorCode === 'auth/operation-not-allowed') {
						alert('Operation not allowed.');
					} else if (errorCode === 'auth/weak-password') {
						alert('The password is too weak.');
					} else {
						alert('auth error' + err.toString());
					}
				}
			}}
		>
			{(formik) => (
				<div className="container mx-auto py-28 max-md:px-6">
					<div className="flex items-center justify-center">
						<div className="mt-4">
							<div className="text-center">
								<h2 className="lg:text-[42px]  md:text-3xl text-2xl font-bold lg:leading-[3.5rem]">
									Register <br />
									Your Account
								</h2>

								<p className="mt-3 max-md:text-sm">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. <br />
									Sit aliquid, Non distinctio vel iste.
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center my-10 mt-24">
						<div className="lg:w-3/6 md:w-8/12">
							<form onSubmit={formik.handleSubmit}>
								<Input1
									type="text"
									name="firstname"
									placeholder="First Name"
									className="mb-5"
								/>
								<Input1
									type="text"
									name="lastname"
									placeholder="Last Name"
									className="mb-5"
								/>
								<Input1
									type="email"
									name="email"
									placeholder="Email*"
									className="mb-5"
								/>
								<Input1
									type="password"
									name="password1"
									placeholder="Password*"
									className="mb-5"
								/>

								<Input1
									type="password"
									name="password2"
									placeholder="Confirm Password*"
								/>

								<Checkboxes
									name="consent"
									options={[
										{
											key: 'I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.',
											value: '0',
										},
										{
											key: 'By clicking "create account", I consent to the privacy policy.',
											value: '1',
										},
									]}
									className="mt-5"
								/>

								<div className="mt-7">
									<Button
										className="my-6 w-full"
										type="submit"
										btn="card"
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
										TERMS OF CONDITIONS &nbsp; &nbsp; |
										&nbsp; &nbsp; PRIVACY POLICY
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
			)}
		</Formik>
	);
}
