import { Input } from '@components/Form';
import Button from '@components/UI/Button';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { validateEmail as validate } from '@components/Form/Validate';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@services/firebase';
import { useDispatch } from 'react-redux';
import { authActions } from '@store/auth/authSlice';
import Title from '@components/Title';

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
					<form
						action="#"
						className=""
						onSubmit={formik.handleSubmit}
					>
						<Input
							type="text"
							name="firstName"
							placeholder="First Name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.firstName}
							className="mb-7"
						/>
						<Input
							type="text"
							name="lastName"
							placeholder="Last Name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.lastName}
							className="mb-7"
						/>
						<Input
							type="text"
							name="email"
							placeholder="Email*"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							className="mb-7"
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password*"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
							className="mb-7"
						/>
						<Input
							type="password"
							name="confirmpassword"
							placeholder="Confirm Password*"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.confirmPassword}
						/>
						<label className="flex mt-8 text-sm">
							<Input
								type="checkbox"
								value=""
								className="mr-2 relative top-[1px]"
							/>
							I consent to Herboil processing my personal data in
							order to send personalized marketing material in
							accordance with the consent form and the privacy
							policy.
						</label>
						<label className="flex mt-4 text-sm">
							<Input
								type="checkbox"
								value=""
								className="mr-2  relative top-[1px]"
							/>
							By clicking "create account", I consent to the
							privacy policy.
						</label>
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
								TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp;
								&nbsp; PRIVACY POLICY
							</Link>
						</p>
						<div className="mt-12 underline">
							<Button
								type="link"
								className="hover:text-greenBtn text-lg"
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
