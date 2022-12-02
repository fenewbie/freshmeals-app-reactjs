import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async() => {
	const productsSnap = await getDocs(collection(db, 'products'));
	productsSnap.forEach((doc) => {
		const products = doc.data();
		return products
	});
};
