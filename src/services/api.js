import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
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
	obj.id = id;
	return obj ?? null;
};

export const getData = async() => {
	const blogs = await getDocuments('blog');
	const products = await getDocuments('products');
	const promotions = await getDocuments('promotion');
	const galleries = await getDocuments('blog/2/gallery');

	const questions = await getDocuments('blog/1/q&a');
	const services = await getDocuments('features/1/feature-serivce');
	const teams = await getDocuments('members');
	const feedbacks = await getDocuments('members/1/client-feedback');

	const portfolio = await getDocuments('portfolio');
	const countdown = await getDocuments('countdown');
	const slideHeader = await getDocuments('slide-header');
	const features = await getDocuments('features');
	
	return {
		blogs,
		products,
		promotions,
		galleries,
		questions,
		services,
		teams,
		feedbacks,
		portfolio,
		countdown,
		slideHeader,
		features,
	};
};
