import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/UI/Button';
import { Input } from '@components/Form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@services/firebase';
import { useState } from 'react';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate('/');
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<section className="my-28">
			<div className="container mx-auto">
				<div className="grid grid-flow-row">
					<div className="lg:grid-cols-12">
						<div className="text-center">
							<h2 className="lg:text-[42px]  md:text-3xl text-2xl font-bold lg:leading-[3.5rem]">
								Sign In <br />
								To Your Account
							</h2>
							<p className="mt-3 max-md:text-sm">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
								Sit aliquid, Non distinctio vel iste.
							</p>
						</div>
					</div>
				</div>
				<div className="grid lg:grid-cols-12 grid-cols-1 max-md:px-6 gap-8 mt-20  ">
					<div className="lg:col-span-5 ">
						<div className="">
							<form className="">
								<Input
									type="text"
									name="email"
									placeholder="Email*"
									required
									onChange={(e) => setEmail(e.target.value)}
									className="mb-7"
								/>
								<Input
									type="password"
									name="password"
									placeholder="Password*"
									required
									onChange={(e) => setPassword(e.target.value)}
								/>
								<div className="mt-7">
									<Button
										className="w-full"
										btn="card"
										type="submit"
										onClick={onLogin}
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
							</form>
						</div>
					</div>
					<div className="lg:col-span-6 ">
						<div className=" text-center pt-50">
							<h4 className="font-bold mb-5">DON'T HAVE AN ACCOUNT?</h4>
							<p className="max-md:text-sm max-md:mb-6">
								Add items to your wishlistget personalised recommendations
								<br />
								check out more quickly track your orders register
							</p>
							<Button
								btn="card"
								className="min-w-[210px] max-w-[200px] mt-8"
								onClick={() => navigate('/register')}
							>
								CREATE ACCOUNT
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
