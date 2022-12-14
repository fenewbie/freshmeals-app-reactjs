import {
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	startAt,
	endAt,
	orderBy,
	limit,
	where
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

// export const getCollectionByTitle = async (col, field, title) => {
// 	const docRef = collection(db, col);
// 	const q = query(
// 		docRef,
// 		orderBy(field),
// 		// where(field, '>=', title.toUpperCase()),
// 		// where(
// 		// 	field,
// 		// 	'<=',
// 		// 	title.toUpperCase() + '\uf8ff'
// 		// )
// 		startAt(`%${title}%`),
// 		endAt(title+"\uf8ff")
// 		// startAt('[a-zA-Z0-9]*'),
// 		// endAt(title)
// 		// endAt([title + '\uf8ff'])
// 	);
// 	const docsSnap = await getDocs(q);
// 	let document = [];
// 	docsSnap.forEach((doc) => {
// 		document.push({ ...doc.data(), id: doc.id });
// 	});
// 	return document;
// };

export const getData = async () => {
	const blogs = await getDocuments('blog');
	const products = await getDocuments('products');
	const promotions = await getDocuments('promotion');
	return { blogs, products, promotions };
};
