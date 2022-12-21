// import { auth } from '@services/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

// export function useAuth() {
// 	const currentUser = useSelector(state => state.auth.value)
// 	useEffect(() => {
// 		onAuthStateChanged(auth, (user) => {
// 			if (user) {
// 				const uid = user.uid;
// 				console.log('uid', uid);
// 				return uid;
// 			} else {
// 				return null;
// 			}
// 		});
// 	}, []);
// 	return { currentUser };
// }
