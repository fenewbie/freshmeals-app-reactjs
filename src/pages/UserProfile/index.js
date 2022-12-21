import { auth } from '@services/firebase';
import { signOut } from 'firebase/auth';

export default function UserProfile() {
	return (
		<div>
			<h5>user profile</h5>
			<h1>Secret page for only authenticated users!</h1>
			<button
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
				Log out
			</button>
		</div>
	);
}
