import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '@components/UI/Button';
import { Input } from '@components/Form';
import { useFormik } from 'formik';
import { validateEmail as validate } from '@components/Form/Validate';
import { login } from '@store/auth/auth-actions';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@services/firebase';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			signInWithEmailAndPassword(auth, values)
				.then((userAuth) => {
					dispatch(
						login({
							email: userAuth.values.email,
							uid: userAuth.values.uid,
							displayName: userAuth.values.displayName,
							photoUrl: userAuth.values.photoURL,
						})
					);
				})
				.catch((err) => {
					console.log(err);
				});
			alert('Login successfully!');
			navigate('/');
		},
	});

	return (
		<section className="my-3 mb-5">
			<div className="container">
				<div className="grid grid-flow-row">
					<div className="lg:grid-cols-12">
						<div className="text-center">
							<h1 className="">
								Sign In <br />
								To Your Account
							</h1>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
								Sit aliquid, Non distinctio vel iste.
							</p>
						</div>
					</div>
				</div>
				<div className="grid">
					<div className="grid-cols-6">
						<div className="w-2/5">
							<form className="" onSubmit={formik.handleSubmit}>
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
								<div className="mt-5">
									<Button className="min-w-[170px]" btn="card" type="submit">
										SIGN IN
									</Button>
								</div>
								<div className="go-to-btn mt-20">
									<Link to="#">
										<small>FORGOTTEN YOUR PASSWORD?</small>
									</Link>
								</div>
							</form>
						</div>
					</div>
					<div className="grid-cols-6">
						<div className=" text-center pt-50">
							<h4>DON'T HAVE AN ACCOUNT?</h4>
							<p>
								Add items to your wishlistget personalised recommendations
								<br />
								check out more quickly track your orders register
							</p>
							<div className="">
								<Button btn="card" className="min-w-[150px]">
									CREATE ACCOUNT
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
