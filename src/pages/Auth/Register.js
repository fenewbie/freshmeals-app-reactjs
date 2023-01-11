import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { Form, Formik } from 'formik';

import { auth, db } from '@services/firebase';
import Button from '@components/UI/Button';
import { RegisterSchema } from '@components/Form/ValidationSchema';
import FormikControl from '@components/Form/FormikControl';
import { consent } from '@utils/constants';

export default function Register() {
	const navigate = useNavigate();
	const initialValues = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		passwordConfirm: '',
		consent: [],
	};
	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);
			const username = userCredential.user;

			setDoc(doc(db, 'users', username.uid), {
				uid: username.uid,
				displayName: `${values.firstname} ${values.lastname}`,
				email: username.email,
				createdAt: Timestamp.now().toDate(),
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
	};
	const handleClick = () => navigate('/login');
	return (
		<div className="container my-28">
			<div className="flex items-center justify-center">
				<div className="">
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
				<div className="lg:w-[40%] md:w-8/12">
					<Formik
						initialValues={initialValues}
						validationSchema={RegisterSchema}
						onSubmit={handleSubmit}
					>
						<Form>
							<FormikControl
								control="input"
								name="firstname"
								placeholder="First Name"
								className="mb-5"
							/>
							<FormikControl
								control="input"
								name="lastname"
								placeholder="Last Name"
								className="mb-5"
							/>
							<FormikControl
								control="input"
								name="email"
								placeholder="Email*"
								className="mb-5"
							/>
							<FormikControl
								control="input"
								type="password"
								name="password"
								placeholder="Password*"
								className="mb-5"
							/>
							<FormikControl
								control="input"
								type="password"
								name="passwordConfirm"
								placeholder="Confirm Password*"
							/>
							<FormikControl
								control="checkbox"
								name="consent"
								options={consent}
								className="mt-5"
							/>
							<div className="mt-7">
								<Button
									className="my-6 w-full max-md:h-[47px] max-md:text-sm"
									type="submit"
									btn="card"
								>
									CREATE ACCOUNT
								</Button>
							</div>
						</Form>
					</Formik>
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
								onClick={handleClick}
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
