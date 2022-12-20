import { Input } from '@components/Form';
import Button from '@components/UI/Button';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { validateEmail as validate } from '@components/Form/Validate';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@services/firebase';
import { useDispatch } from 'react-redux';
import { authActions } from '@store/auth/authSlice';

export default function Register() {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			if (!values.firstName) {
				return alert('please enter a valid name');
			} else {
				try {
					createUserWithEmailAndPassword(auth, values)
						.then((userAuth) => {
							updateProfile(userAuth.user, {
								displayName: values.firstname,
								photoURL: values.profilePic,
							})
								.then(
									dispatch(
										authActions.login({
											email: userAuth.user.email,
											uid: userAuth.user.uid,
											displayName: values.firstName,
											photoUrl: values.profilePic,
										})
									)
								)
								.catch((error) => {
									console.log('user not updated');
								});
						})
						.catch((err) => {
							alert(err);
						});
				} catch (err) {}
			}
		},
	});
	return (
		<div className="">
			<div className="container">
				<div className="flex items-center justify-center">
					<div className="mt-4">
						<div className="text-center">
							<h1 className="">
								Register <br />
								Your Account
							</h1>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
								Sit aliquid, Non distinctio vel iste.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center my-10">
					<div className="w-3/6">
						<form
							action="#"
							className="mb-2 sm:mr-2 sm:mb-0"
							onSubmit={formik.handleSubmit}
						>
							<Input
								type="text"
								name="firstName"
								placeholder="First Name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.firstName}
							/>
							<Input
								type="text"
								name="lastName"
								placeholder="Last Name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.lastName}
							/>
							<Input
								type="text"
								name="email"
								placeholder="Email*"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							<Input
								type="password"
								name="password"
								placeholder="Password*"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
							/>
							<Input
								type="password"
								name="confirmpassword"
								placeholder="Confirm Password*"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.confirmPassword}
							/>
							<label className="">
								<Input type="checkbox" value="" />I consent to Herboil
								processing my personal data in order to send personalized
								marketing material in accordance with the consent form and the
								privacy policy.
							</label>
							<label className="">
								<Input type="checkbox" value="" />
								By clicking "create account", I consent to the privacy policy.
							</label>
							<div className="">
								<Button className="my-6" type="submit" btn="card">
									CREATE ACCOUNT
								</Button>
							</div>
						</form>
						<div className="flex flex-col items-center mb-5">
							<p>By creating an account, you agree to our:</p>
							<p>
								<Link to="#">
									TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
									POLICY
								</Link>
							</p>
							<div className="mt-50 underline">
								<Button type="link" className="">
									ALREADY HAVE AN ACCOUNT ?
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
