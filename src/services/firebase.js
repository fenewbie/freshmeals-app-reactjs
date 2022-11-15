import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAfyYtxwSDryXZMEIZ8nAzCRQPNDmPH1Lw',
	authDomain: 'freshmeals-reactjs.firebaseapp.com',
	projectId: 'freshmeals-reactjs',
	storageBucket: 'freshmeals-reactjs.appspot.com',
	messagingSenderId: '813006076156',
	appId: '1:813006076156:web:c5e3a3142536418935bf79',
	measurementId: 'G-XKMMT2WXNB',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
