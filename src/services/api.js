import {
	collection,
	doc,
	getDocs,
	getDoc
} from 'firebase/firestore';
import { db } from './firebase';

export const getDocuments = async (col) => {
	const docsSnap = await getDocs(collection(db, col));
	let document = [];
	docsSnap.forEach((doc) => {
		document.push({ ...doc.data(), id: doc.id });
	});
	return document;
};

export const getDocumentById = async (id, col) => {
	const docRef = doc(db, col, id);
	const docSnap = await getDoc(docRef);
	const obj = docSnap.data();
	obj.id = id
	return obj ?? null;
};

export const getData = async () => {
	const blogs = await getDocuments('blog');
	const products = await getDocuments('products');
	const promotions = await getDocuments('promotion');
	console.log('get data from router root...');
	return { blogs, products, promotions };
};
