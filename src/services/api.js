import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async () => {
	const productsSnap = await getDocs(collection(db, 'products'));
	let document = [];
	productsSnap.forEach((doc) => {
		document.push({ ...doc.data(), id: doc.id });
	});
	return document;
};

export const getProductById = async() => {
	
}
