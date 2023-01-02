import Button from '@components/UI/Button';
import { auth } from '@services/firebase';
import { signOut } from 'firebase/auth';
import * as cs from '@utils/constants';

export default function UserProfile() {
	return (
		<>
			<div className="my-12 mx-7 flex max-md:flex-wrap max-md:justify-center items-center gap-8">
				<img alt="avatar_default" src={cs.user} className="h-36 w-36" />
				<div className="max-md:basis-full">
					<div className="flex items-center mb-1 max-md:justify-center">
						<h3 className="md:text-2xl text-xl font-bold">User Name:</h3>
						<span className="ml-2 md:text-xl relative md:top-[2px]">
							User Name
						</span>
					</div>
					<div className="flex items-center max-md:justify-center">
						<h3 className="md:text-2xl text-xl font-bold">Email:</h3>
						<span className="ml-2 md:text-xl relative md:top-[2px]">
							User's email
						</span>
					</div>
				</div>
			</div>
			<div className="mb-28 mx-9">
				<Button
					className="btn-animated max-md:w-full"
					onClick={() => {
						signOut(auth)
							.then(() => {
								console.log('user signed out');
							})
							.catch((error) => {
								console.log('error', error);
							});
					}}
				>
					<span className="btn-animated-text">Log out</span>
				</Button>
			</div>
		</>
	);
}
