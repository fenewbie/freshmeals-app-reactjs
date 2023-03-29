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

export const getData = () => {
	const blogs = getDocuments('blog');
	const products = getDocuments('products');
	const promotions = getDocuments('promotion');
	const galleries = getDocuments('blog/2/gallery');

	const questions = getDocuments('blog/1/q&a');
	const services = getDocuments('features/1/feature-serivce');
	const teams = getDocuments('members');
	const feedbacks = getDocuments('members/1/client-feedback');

	const portfolio = getDocuments('portfolio');
	const countdown = getDocuments('countdown');
	const slideHeader = getDocuments('slide-header');

	const features = getDocuments('features');
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
