import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async (col) => {
	const querySnapshot = await getDocs(collection(db, col));
	let documents = [];
	const products = querySnapshot.forEach((doc) => {
		documents.push({ ...doc.data(), id: doc.id });
	});
    console.log("products in API", products);
    return products
};
