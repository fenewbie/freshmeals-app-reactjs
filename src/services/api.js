import { collection, doc, getDoc,getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async () => {
	const productsSnap = await getDocs(collection(db, 'products'));
	let document = [];
	productsSnap.forEach((doc) => {
		document.push({ ...doc.data(), id: doc.id });
	});
	return document;
};

export const getProductById = async (id) => {
	const productRef = doc(db, 'products', id);
	const productSnap = await getDoc(productRef);
	const obj = productSnap.data();
	console.log('product by id from api', obj);
	return obj ?? null;
};
