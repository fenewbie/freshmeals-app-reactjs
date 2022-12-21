import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '@services/firebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Input } from '@components/Form';
import Button from '@components/UI/Button';

export default function Register() {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cPassword, setCPassword] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const username = userCredential.user;
			await setDoc(doc(db, 'users', username.uid), {
				uid: username.uid,
				displayName: `${firstName} ${lastName}`,
				email,
			});
			console.log(username);
			navigate('/login');
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('An error occured: ', errorCode, errorMessage);
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
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
							Sit aliquid, Non distinctio vel iste.
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center my-10 mt-24">
				<div className="lg:w-3/6 md:w-8/12">
					<form className="" onSubmit={onSubmit}>
						<Input
							type="text"
							name="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="First Name"
							className="mb-7"
						/>
						<Input
							type="text"
							name="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Last Name"
							className="mb-7"
						/>
						<Input
							type="text"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email*"
							className="mb-7"
						/>
						<Input
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password*"
							className="mb-7"
						/>
						<Input
							type="password"
							name="cPassword"
							value={cPassword}
							onChange={(e) => setCPassword(e.target.value)}
							placeholder="Confirm Password*"
						/>
						<label className="flex mt-8 text-sm">
							<Input
								type="checkbox"
								value=""
								className="mr-2 relative top-[1px]"
							/>
							I consent to Herboil processing my personal data in order to send
							personalized marketing material in accordance with the consent
							form and the privacy policy.
						</label>
						<label className="flex mt-4 text-sm">
							<Input
								type="checkbox"
								value=""
								className="mr-2  relative top-[1px]"
							/>
							By clicking "create account", I consent to the privacy policy.
						</label>
						<div className="mt-7">
							<Button className="my-6 w-full" type="submit" btn="card">
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
								TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY POLICY
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
